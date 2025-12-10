import { Component, signal, SimpleChanges } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '@shared/components/hero/hero';
import { UpdateProfileDto, User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CommonModule, FormsModule, Hero],
  templateUrl: './profile-page.html',
  styleUrls: ['./profile-page.css']
})
export class ProfilePage {
  
  protected heroIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="brand-icon w-15 h-15" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  `;

  currentUser: User | null = null;

  protected isEditing = signal(false);
  protected showPasswordModal = signal(false);
  protected showDeleteModal = signal(false);
  protected isSaving = false;
  protected saveError = '';
  localUser!: User;

  // Store temporary image preview URL
  protected tempImagePreview = signal<string | null>(null);

  protected formData = signal({
    name: '',
    email: '',
    image: null as File | null,
    imagePreview: '' as String | null
  });

  protected passwordForm = signal({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  protected deleteConfirmation = signal('');

  constructor(private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      if (!user) return;

      this.currentUser = user;
      this.localUser = { ...user };
      console.log('Parent received user:', user.id);
    });
  }

  // MMethod to get the image to display (temporary preview or current image)
  protected getDisplayImage(): string | null {
    // Priority 1: Temporary image (newly selected)
    if (this.tempImagePreview()) {
      return this.tempImagePreview();
    }
    // Priority 2: Form image preview (in edit mode)
    if (this.formData().imagePreview) {
      return this.formData().imagePreview as string;
    }
    // Priority 3: Current user's image
    return this.currentUser?.image || null;
  }

  // Edit Profile Methods
  protected startEditing(): void {
      this.isEditing.set(true);
      if(this.currentUser){
        // Keep the temporary image if it exists
        const currentFormData = this.formData();
        this.formData.set({
          name: this.currentUser.name,
          email: this.currentUser.email,
          image: currentFormData.image, // Keep the selected image
          imagePreview: this.tempImagePreview() || this.currentUser.image // Use temporary preview if it exists
        });
      }
  }

  // Cancel Editing
  protected cancelEditing(): void {
    this.isEditing.set(false);
    // Reset temporary image preview
    this.tempImagePreview.set(null);
    if(this.currentUser){
      this.formData.set({
        name: this.currentUser.name,
        email: this.currentUser.email,
        image: null,
        imagePreview: this.currentUser.image
      });
    }
  }

  // Image Selection - Modified to display immediately
  protected onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Image size must be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result as string;
        
        // Update temporary preview (visible immediately)
        this.tempImagePreview.set(imageUrl);
        
        // Update form with file AND preview
        this.formData.update(data => ({
          ...data,
          image: file,
          imagePreview: imageUrl
        }));

        console.log('Image selected:', file.name, 'Size:', file.size);
      };
      reader.readAsDataURL(file);
    }
  }

  // Trigger Image Upload
  protected triggerImageUpload(): void {
    const input = document.getElementById('imageUpload') as HTMLInputElement;
    input?.click();
  }

  // Save Profile
  protected saveProfile(): void {
    const form = this.formData();
    
    console.log('Saving profile with image:', form.image ? 'Yes - ' + form.image.name : 'No');
    
    if (!form.name.trim()) {
      alert('Name is required');
      return;
    }

    if (!form.email.trim() || !form.email.includes('@')) {
      alert('Valid email is required');
      return;
    }

    this.isSaving = true;
    this.saveError = '';

    const data: UpdateProfileDto = {
      name: form.name,
      email: form.email
    };

    //update profile
    this.userService.updateProfile(data).subscribe({
      next: (updatedUser) => {
        console.log('Profile basic data updated', updatedUser);

        //check if the profile pic got updated
        if (form.image) {
          console.log('Uploading image:', form.image.name);
          this.userService.updateProfileImage(form.image).subscribe({
            next: (response) => {
              console.log('Image uploaded successfully:', response);
              this.isSaving = false;
              this.isEditing.set(false);
              // Reset temporary image preview after successful save
              this.tempImagePreview.set(null);

              alert('Profile and photo updated successfully!');
            },
            error: (err) => {
              this.isSaving = false;
              this.saveError = 'Photo upload failed.';
              console.error('Image upload error:', err);
              alert(err.message || 'Photo upload failed.');
            }
          });

        } else {
          // No image to update
          console.log('No image to update');
          this.isSaving = false;
          this.isEditing.set(false);
          this.tempImagePreview.set(null);

          alert('Profile updated successfully!');
        }
      },

      error: (err) => {
        this.isSaving = false;
        this.saveError = 'Failed to save profile information.';
        console.error('Profile update error:', err);
        alert(err.error.message || 'Failed to save profile information.');
      }
    });
  }

  // Change Password Methods
  protected openPasswordModal(): void {
    this.showPasswordModal.set(true);
    this.passwordForm.set({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  }

  // Close Password Modal
  protected closePasswordModal(): void {
    this.showPasswordModal.set(false);
  }

  // Change Password
  protected changePassword(): void {
    const form = this.passwordForm();

    if (!form.currentPassword) {
      alert('Current password is required');
      return;
    }

    if (!form.newPassword || form.newPassword.length < 8) {
      alert('New password must be at least 8 characters');
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // API Call to change password
    this.userService
      .changePassword({
        currentPassword: form.currentPassword,
        newPassword: form.newPassword,
      })
      .subscribe({
        next: () => {
          console.log('Password changed successfully');
          alert('Password changed successfully!');
          this.closePasswordModal();
        },
        error: (err) => {
          alert(err.error.message || 'Failed to update password');
        },
      });
  }

  // Delete Account Methods
  protected openDeleteModal(): void {
    this.showDeleteModal.set(true);
    this.deleteConfirmation.set('');
  }

  // Close Delete Modal
  protected closeDeleteModal(): void {
    this.showDeleteModal.set(false);
  }

  // Delete Account
  protected deleteAccount(): void {
    if (this.deleteConfirmation() !== 'DELETE') {
      alert('Please type DELETE to confirm');
      return;
    }
    else{
      this.userService.deleteMyProfile().subscribe({
      next: () => {
        console.log('Account deleted');
        alert('Account deleted successfully!');
        window.location.href = '/';
      },
      error: (err) => {
        console.error('Failed to delete profile:', err);
        alert('Failed to delete profile. Please try again.');
      },
    });
    }
    this.closeDeleteModal();
  }

  // Update Form Field
  protected updateFormField(field: string, value: string): void {
    this.formData.update(data => ({ ...data, [field]: value }));
  }

  // Update Password Field
  protected updatePasswordField(field: string, value: string): void {
    this.passwordForm.update(form => ({ ...form, [field]: value }));
  }

  // Get Joined Date
  protected getJoinedDate(): string {
    if (!this.currentUser) return '';
    return new Date(this.currentUser.createdAt).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}