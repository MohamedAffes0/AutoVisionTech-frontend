import { Component } from '@angular/core';
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
  imagePreview: string | null = null;
  selectedImageFile: File | null = null;
  
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
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedImageFile = file;
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        this.imagePreview = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
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

  // Delete car
  handleDeleteCar(carId: string): void {
    const car = this.cars.find(c => c.id === carId);
    if (car) {
      const confirmDelete = confirm(
        `Are you sure you want to delete ${car.brand} ${car.model}?\nThis action cannot be undone.`
      );
      
      if (confirmDelete) {
        this.cars = this.cars.filter(c => c.id !== carId);
        
        // Cancel edit mode if the deleted car was being edited
        if (this.editingCarId === carId) {
          this.editingCarId = null;
          this.editForm = { status: 'available', price: 0 };
        }
        
        alert(`${car.brand} ${car.model} has been deleted successfully!`);
      }
    }
  }

  // Add new car
  handleAddCar(): void {
    if (this.isNewCarFormValid()) {
      // Use uploaded image preview or default image
      const imageUrl = this.imagePreview || 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg';
      
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
        images: [imageUrl]
      };
      
      this.cars.unshift(newCar);
      this.toggleAddForm();
      alert(`Vehicle ${newCar.brand} ${newCar.model} has been added successfully!`);
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
    this.imagePreview = null;
    this.selectedImageFile = null;
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