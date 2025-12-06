import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface ReservationFormData {
  clientName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
}

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reservation-form.html',
  styleUrls: ['./reservation-form.css']
})
export class ReservationForm {
  // Car status
  carStatus: 'available' | 'reserved' | 'sold' = 'available';
  
  // Show/hide the form
  showReservationForm = false;

  // Reservation form
  reservationForm: ReservationFormData = {
    clientName: '',
    email: '',
    phone: '',
    date: '',
    time: ''
  };

  // Toggle the form
  toggleForm(): void {
    this.showReservationForm = !this.showReservationForm;
    if (!this.showReservationForm) {
      this.resetForm();
    }
  }

  // Submit the reservation
  onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Reservation submitted:', this.reservationForm);
      alert(`Reservation confirmed for ${this.reservationForm.clientName} on ${this.reservationForm.date} at ${this.reservationForm.time}`);
      this.resetForm();
      this.showReservationForm = false;
    }
  }

  // Cancel the reservation
  onCancel(): void {
    this.resetForm();
    this.showReservationForm = false;
  }

  // Check if the form is valid
  private isFormValid(): boolean {
    return !!(
      this.reservationForm.clientName.trim() &&
      this.reservationForm.email.trim() &&
      this.reservationForm.phone.trim() &&
      this.reservationForm.date &&
      this.reservationForm.time
    );
  }

  // Reset the form
  private resetForm(): void {
    this.reservationForm = {
      clientName: '',
      email: '',
      phone: '',
      date: '',
      time: ''
    };
  }

  // Minimum date (today)
  get minDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }
}