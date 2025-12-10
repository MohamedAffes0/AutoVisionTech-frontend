import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Hero } from '@shared/components/hero/hero';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule, Hero],
  templateUrl: './faq.html',
  styleUrls: ['./faq.css']
})
export class Faq {
  protected heroIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="brand-icon w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
    </svg>
  `;

  protected searchQuery = signal('');
  protected selectedCategory = signal('all');
  protected expandedItems = signal<Set<number>>(new Set());

  protected categories = [
    { value: 'all', label: 'All Questions', icon: 'M4 6h16M4 12h16M4 18h16' },
    { value: 'buying', label: 'Buying Process', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
    { value: 'financing', label: 'Financing', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { value: 'tradein', label: 'Trade-In', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
    { value: 'warranty', label: 'Warranty & Service', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { value: 'delivery', label: 'Delivery & Pickup', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4' }
  ];

  protected faqs: FAQItem[] = [
    // Buying Process
    {
      category: 'buying',
      question: 'How do I purchase a vehicle from AutoVisionTech?',
      answer: 'Purchasing a vehicle is simple: Browse our online catalog, schedule a test drive, get pre-approved for financing, and complete the purchase with our sales team. We handle all paperwork and can deliver your vehicle to your doorstep.'
    },
    {
      category: 'buying',
      question: 'Can I test drive a vehicle before purchasing?',
      answer: 'Absolutely! We encourage all customers to test drive vehicles before making a purchase. You can schedule a test drive online or by calling us. We offer flexible scheduling including evenings and weekends.'
    },
    {
      category: 'buying',
      question: 'Do you offer vehicle history reports?',
      answer: 'Yes, we provide comprehensive vehicle history reports for all our pre-owned vehicles. These reports include accident history, previous ownership, service records, and title information.'
    },
    {
      category: 'buying',
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including cash, certified checks, bank transfers, and financing through our lending partners. Credit cards are accepted for down payments up to $5,000.'
    },
    
    // Financing
    {
      category: 'financing',
      question: 'What credit score do I need to get approved?',
      answer: 'We work with customers of all credit backgrounds. While a score of 650+ typically gets the best rates, we have programs for scores as low as 580. Our financing specialists will find the best option for your situation.'
    },
    {
      category: 'financing',
      question: 'How long does the financing approval process take?',
      answer: 'Most applications are approved within 24 hours. For customers with strong credit, approval can be instant. We work with multiple lenders to ensure quick processing and competitive rates.'
    },
    {
      category: 'financing',
      question: 'Can I pay off my loan early without penalties?',
      answer: 'Yes! All our financing options come with no prepayment penalties. You can pay off your loan at any time without additional fees, potentially saving on interest charges.'
    },
    {
      category: 'financing',
      question: 'What is the minimum down payment required?',
      answer: 'Down payment requirements vary by lender and credit profile, typically ranging from 10-20% of the vehicle price. However, we offer programs with as little as $0 down for qualified buyers.'
    },

    // Trade-In
    {
      category: 'tradein',
      question: 'Do you accept trade-ins on any vehicle?',
      answer: 'Yes, we accept trade-ins on virtually any make and model, regardless of age or condition. We provide fair market value assessments and can often offer more than traditional dealers.'
    },
    {
      category: 'tradein',
      question: 'How is my trade-in value determined?',
      answer: 'Trade-in value is based on market conditions, vehicle condition, mileage, year, make, model, trim level, service history, and current demand. We use industry-standard valuation tools and real-time market data.'
    },
    {
      category: 'tradein',
      question: 'Can I trade in a vehicle with an outstanding loan?',
      answer: 'Yes, you can trade in a vehicle with an existing loan. We will pay off your loan balance and apply any remaining equity toward your new purchase. If you owe more than the vehicle is worth, we can often roll the difference into your new loan.'
    },
    {
      category: 'tradein',
      question: 'Do I need to bring anything for the trade-in appraisal?',
      answer: 'Please bring your vehicle title (if owned outright), current registration, all sets of keys, maintenance records, and a valid ID. If there is a loan, bring your latest payment statement with the lender information.'
    },

    // Warranty & Service
    {
      category: 'warranty',
      question: 'What warranty coverage do you offer?',
      answer: 'All vehicles come with our 30-day/1,000-mile warranty covering major components. We also offer extended warranty plans covering powertrain, electrical, and comprehensive bumper-to-bumper protection for up to 7 years/100,000 miles.'
    },
    {
      category: 'warranty',
      question: 'Where can I get my vehicle serviced?',
      answer: 'Our extended warranties are honored at thousands of certified repair facilities nationwide. You can also service your vehicle at our facility or any ASE-certified mechanic of your choice.'
    },
    {
      category: 'warranty',
      question: 'What is covered under the basic warranty?',
      answer: 'Our basic warranty covers engine, transmission, drivetrain, electrical systems, cooling system, fuel system, and steering components. Wear items like brakes, tires, and batteries have separate coverage terms.'
    },
    {
      category: 'warranty',
      question: 'Can I purchase an extended warranty later?',
      answer: 'Yes, you can purchase an extended warranty up to 30 days after purchase or before your basic warranty expires, whichever comes first. However, pricing may be higher than purchasing at time of sale.'
    },

    // Delivery & Pickup
    {
      category: 'delivery',
      question: 'Do you offer home delivery?',
      answer: 'Yes! We offer free home delivery within 50 miles. For distances beyond 50 miles, delivery fees apply based on location. We can also arrange nationwide shipping for out-of-state customers.'
    },
    {
      category: 'delivery',
      question: 'How long does delivery take?',
      answer: 'Local deliveries (within 50 miles) are typically completed within 1-3 business days after paperwork is finalized. Nationwide shipping takes 5-10 business days depending on distance.'
    },
    {
      category: 'delivery',
      question: 'What happens during the delivery process?',
      answer: 'During delivery, our specialist will walk you through all vehicle features, review documentation, answer questions, and ensure you are comfortable with your new vehicle. We perform a final inspection and provide a full tank of gas.'
    },
    {
      category: 'delivery',
      question: 'Can I pick up the vehicle myself?',
      answer: 'Absolutely! Many customers prefer to pick up their vehicle at our facility. We will coordinate a convenient time and ensure your vehicle is detailed and ready for pickup. We will walk you through all features during pickup.'
    }
  ];

  protected get filteredFAQs(): FAQItem[] {
    let filtered = this.faqs;

    // Filter by category
    if (this.selectedCategory() !== 'all') {
      filtered = filtered.filter(faq => faq.category === this.selectedCategory());
    }

    // Filter by search query
    const query = this.searchQuery().toLowerCase();
    if (query) {
      filtered = filtered.filter(faq => 
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query)
      );
    }

    return filtered;
  }

  protected toggleItem(index: number): void {
    const expanded = new Set(this.expandedItems());
    if (expanded.has(index)) {
      expanded.delete(index);
    } else {
      expanded.add(index);
    }
    this.expandedItems.set(expanded);
  }

  protected isExpanded(index: number): boolean {
    return this.expandedItems().has(index);
  }
}