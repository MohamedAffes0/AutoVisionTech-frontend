import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  kilometerAge: number;
  condition: string;
  status: 'available' | 'reserved' | 'sold';
  description: string;
  images: string[];
}

@Component({
  selector: 'app-manage-cars',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-cars.html',
  styleUrls: ['./manage-cars.css']
})
export class ManageCars {
  constructor(private cdr: ChangeDetectorRef) {}
  // Cars data
  cars: Car[] = [
    {
      id: '1',
      brand: 'BMW',
      model: 'M4',
      year: 2021,
      price: 65000,
      kilometerAge: 29500,
      condition: 'Excellent',
      status: 'available',
      description: 'A high-performance coupe with an aggressive design.',
      images: ['https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg']
    },
    {
      id: '2',
      brand: 'Mercedes-Benz',
      model: 'AMG GT',
      year: 2022,
      price: 120000,
      kilometerAge: 15000,
      condition: 'Excellent',
      status: 'available',
      description: 'Luxury sports car with exceptional performance.',
      images: ['https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg']
    },
    {
      id: '3',
      brand: 'Audi',
      model: 'RS6',
      year: 2020,
      price: 95000,
      kilometerAge: 42000,
      condition: 'Good',
      status: 'reserved',
      description: 'High-performance wagon with plenty of space.',
      images: ['https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg']
    },
    {
      id: '4',
      brand: 'Porsche',
      model: '911 Turbo',
      year: 2023,
      price: 180000,
      kilometerAge: 5000,
      condition: 'Excellent',
      status: 'sold',
      description: 'Iconic sports car with timeless design.',
      images: ['https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg']
    }
  ];

  currentYearPlusOne = new Date().getFullYear() + 1;

  // Edit state
  editingCarId: string | null = null;
  editForm = {
    status: 'available' as 'available' | 'reserved' | 'sold',
    price: 0
  };

  // Add car form
  showAddForm = false;
  newCarForm = {
    brand: '',
    model: '',
    description: '',
    year: new Date().getFullYear(),
    price: 0,
    kilometerAge: 0,
    condition: '',
    status: 'available' as 'available' | 'reserved' | 'sold',
    images: ['']
  };

  // Handle image selection
  imageFiles: File[] = [];
  imagePreviews: string[] = [];
  imageError = '';
  MAX_IMAGES = 5;
  MAX_SIZE = 1 * 1024 * 1024; // 1MB

  // Computed stats
  get totalCars(): number {
    return this.cars.length;
  }

  get availableCars(): number {
    return this.cars.filter(c => c.status === 'available').length;
  }

  get reservedCars(): number {
    return this.cars.filter(c => c.status === 'reserved').length;
  }

  get soldCars(): number {
    return this.cars.filter(c => c.status === 'sold').length;
  }

  // Toggle add form
  toggleAddForm(): void {
    this.showAddForm = !this.showAddForm;
    if (!this.showAddForm) {
      this.resetNewCarForm();
    }
  }

  // Handle image selection
  onImagesSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.imageError = '';

    if (!input.files || input.files.length === 0) return;

    const selectedFiles = Array.from(input.files);
    const remainingSlots = this.MAX_IMAGES - this.imageFiles.length;

    // Check if maximum is exceeded
    if (selectedFiles.length > remainingSlots) {
      this.imageError = `You can select up to ${this.MAX_IMAGES} images. There are ${remainingSlots} slot(s) available.`;
      input.value = '';
      return;
    }

    // Process each file
    const validFiles: File[] = [];
    const invalidFiles: string[] = [];

    for (const file of selectedFiles) {
      // Check size
      if (file.size > this.MAX_SIZE) {
        invalidFiles.push(file.name);
        continue;
      }

      // Check type
      if (!file.type.startsWith('image/')) {
        invalidFiles.push(file.name);
        continue;
      }

      validFiles.push(file);
    }

    // Display errors if any
    if (invalidFiles.length > 0) {
      this.imageError = `The following files are invalid (size > 1MB or unsupported format): ${invalidFiles.join(', ')}`;
    }

    // Add valid files and generate previews
    let loadedCount = 0;
    validFiles.forEach(file => {
      this.imageFiles.push(file);

      // Generate preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          this.imagePreviews.push(e.target.result as string);
          loadedCount++;
          
          // Trigger change detection after each image is loaded
          this.cdr.detectChanges();
        }
      };
      reader.onerror = () => {
        console.error(`Error reading file ${file.name}`);
        loadedCount++;
      };
      reader.readAsDataURL(file);
    });

    // Clear the input to allow re-selecting the same images
    input.value = '';
  }

  // Remove an image
  removeImage(index: number): void {
    this.imageFiles.splice(index, 1);
    this.imagePreviews.splice(index, 1);
    this.imageError = '';
  }

  // Start editing a car
  handleStartEdit(car: Car): void {
    this.editingCarId = car.id;
    this.editForm = {
      status: car.status,
      price: car.price
    };
  }

  // Save edited car
  handleSaveEdit(carId: string): void {
    const carIndex = this.cars.findIndex(c => c.id === carId);
    if (carIndex !== -1) {
      this.cars[carIndex] = {
        ...this.cars[carIndex],
        ...this.editForm
      };
    }
    this.editingCarId = null;
    this.editForm = { status: 'available', price: 0 };
  }

  // Cancel editing
  handleCancelEdit(): void {
    this.editingCarId = null;
    this.editForm = { status: 'available', price: 0 };
  }

  // Add new car
  handleAddCar(): void {
    if (this.isNewCarFormValid()) {
      // Use uploaded images or default image
      const carImages = this.imagePreviews.length > 0 
        ? this.imagePreviews 
        : ['https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg'];
      
      const newCar: Car = {
        id: Date.now().toString(),
        brand: this.newCarForm.brand,
        model: this.newCarForm.model,
        description: this.newCarForm.description,
        year: this.newCarForm.year,
        price: this.newCarForm.price,
        kilometerAge: this.newCarForm.kilometerAge,
        condition: this.newCarForm.condition,
        status: this.newCarForm.status,
        images: carImages
      };
      
      this.cars.unshift(newCar);
      this.toggleAddForm();
      alert(`Vehicle ${newCar.brand} ${newCar.model} has been added successfully with ${carImages.length} image(s)!`);
    }
  }

  // Check if new car form is valid
  isNewCarFormValid(): boolean {
    return !!(
      this.newCarForm.brand.trim() &&
      this.newCarForm.model.trim() &&
      this.newCarForm.description.trim() &&
      this.newCarForm.year > 0 &&
      this.newCarForm.price > 0 &&
      this.newCarForm.kilometerAge >= 0 &&
      this.newCarForm.condition.trim()
    );
  }

  // Reset new car form
  resetNewCarForm(): void {
    this.newCarForm = {
      brand: '',
      model: '',
      description: '',
      year: new Date().getFullYear(),
      price: 0,
      kilometerAge: 0,
      condition: '',
      status: 'available',
      images: ['']
    };
    // Reset            images
    this.imageFiles = [];
    this.imagePreviews = [];
    this.imageError = '';
  }

  // Check if car is being edited
  isEditing(carId: string): boolean {
    return this.editingCarId === carId;
  }

  // Get status badge class
  getStatusColor(status: string): string {
    switch (status) {
      case 'available':
        return 'bg-green-500/10 text-green-400 border-green-500/50';
      case 'reserved':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/50';
      case 'sold':
        return 'bg-red-500/10 text-red-400 border-red-500/50';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/50';
    }
  }
}