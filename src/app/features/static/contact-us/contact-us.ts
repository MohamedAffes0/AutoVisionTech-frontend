import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '@shared/components/hero/hero';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, Hero],
  templateUrl: './contact-us.html',
  styleUrls: ['./contact-us.css']
})
export class ContactUs {
  protected heroIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="brand-icon w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  `;

  protected formSubmitted = signal(false);

  protected contactForm: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  };

  protected subjects = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales Question' },
    { value: 'financing', label: 'Financing Information' },
    { value: 'tradein', label: 'Trade-In Valuation' },
    { value: 'service', label: 'Service & Warranty' },
    { value: 'feedback', label: 'Feedback & Suggestions' }
  ];

  protected contactMethods = [
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Phone',
      value: '+216 55 123 456',
      link: 'tel:+21655123456',
      description: 'Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM'
    },
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email',
      value: 'info@autovision.com',
      link: 'mailto:info@autovision.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Location',
      value: 'Sfax, Tunisia',
      link: 'https://maps.google.com',
      description: 'Visit our showroom'
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Business Hours',
      value: 'Open 7 Days',
      link: null,
      description: 'Mon-Fri: 9AM-8PM, Sat-Sun: 10AM-6PM'
    }
  ];

  protected departments = [
    {
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
      name: 'Sales Department',
      email: 'sales@autovision.com',
      phone: '+216 55 123 456'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      name: 'Finance Department',
      email: 'finance@autovision.com',
      phone: '+216 55 123 457'
    },
    {
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      name: 'Service Department',
      email: 'service@autovision.com',
      phone: '+216 55 123 458'
    }
  ];

  protected onSubmit(): void {
    if (this.isFormValid()) {
      console.log('Contact form submitted:', this.contactForm);
      this.formSubmitted.set(true);
      
      setTimeout(() => {
        this.formSubmitted.set(false);
        this.resetForm();
      }, 3000);
    }
  }

  protected isFormValid(): boolean {
    return !!(
      this.contactForm.name.trim() &&
      this.contactForm.email.trim() &&
      this.isValidEmail(this.contactForm.email) &&
      this.contactForm.message.trim()
    );
  }

  protected isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  protected resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: ''
    };
  }
}