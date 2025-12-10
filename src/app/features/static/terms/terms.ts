import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalPage, LegalSection, QuickLink } from '@shared/components/legal-page/legal-page';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, LegalPage],
  templateUrl: './terms.html',
  styleUrls: ['./terms.css']
})
export class Terms {
  protected heroIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="brand-icon w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
  `;

  protected heroName = 'Terms of Service';
  protected heroSubtitle = 'Please Read These Terms Carefully Before Using Our Services';
  protected lastUpdated = 'December 10, 2025';

  protected sections: LegalSection[] = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: 'By accessing and using AutoVisionTech\'s website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use constitutes acceptance of any changes.'
    },
    {
      id: 'services',
      title: 'Our Services',
      content: 'AutoVisionTech provides automotive sales, financing, trade-in services, and related automotive solutions. All services are subject to availability and may vary by location. We reserve the right to modify, suspend, or discontinue any service at any time without notice.'
    },
    {
      id: 'eligibility',
      title: 'Eligibility Requirements',
      list: [
        'You must be at least 18 years of age to use our services',
        'You must have the legal capacity to enter into binding contracts',
        'You must provide accurate and complete information',
        'You must have a valid driver\'s license for test drives and purchases',
        'Financing applications subject to credit approval'
      ]
    },
    {
      id: 'account',
      title: 'User Accounts',
      subsections: [
        {
          subtitle: 'Account Creation',
          content: 'You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.'
        },
        {
          subtitle: 'Account Security',
          content: 'You must notify us immediately of any unauthorized use of your account. We are not liable for any loss or damage from your failure to protect your account information.'
        },
        {
          subtitle: 'Account Termination',
          content: 'We reserve the right to suspend or terminate your account at any time for violations of these terms or for any other reason at our discretion.'
        }
      ]
    },
    {
      id: 'purchases',
      title: 'Vehicle Purchases and Sales',
      subsections: [
        {
          subtitle: 'Purchase Process',
          content: 'All vehicle purchases are subject to availability and final verification. Prices are subject to change without notice. A signed purchase agreement is required to complete any transaction.'
        },
        {
          subtitle: 'Payment Terms',
          content: 'Full payment or approved financing is required before vehicle delivery. We accept cash, certified checks, bank transfers, and approved credit applications. Down payments may be required based on financing terms.'
        },
        {
          subtitle: 'Vehicle Condition',
          content: 'All vehicles are sold "as-is" unless otherwise specified in writing. We provide vehicle history reports and condition disclosures, but buyers are encouraged to conduct independent inspections.'
        },
        {
          subtitle: 'Delivery',
          content: 'Delivery timelines are estimates and may vary. Title transfer and registration are subject to state requirements and processing times.'
        }
      ]
    },
    {
      id: 'financing',
      title: 'Financing Services',
      content: 'Financing is provided through third-party lenders and is subject to credit approval. We do not guarantee financing approval. All financing terms, including interest rates and payment schedules, are determined by the lending institution. You are responsible for understanding all financing terms before acceptance.'
    },
    {
      id: 'tradein',
      title: 'Trade-In Services',
      content: 'Trade-in valuations are estimates and subject to physical inspection. Final trade-in value may differ from initial estimates based on actual vehicle condition. Trade-in offers are valid for a limited time. Clear title or payoff information required for all trade-ins.'
    },
    {
      id: 'intellectual',
      title: 'Intellectual Property',
      content: 'All content on our website, including text, graphics, logos, images, and software, is the property of AutoVisionTech and protected by copyright and trademark laws. You may not reproduce, distribute, or create derivative works without our express written permission.'
    },
    {
      id: 'prohibited',
      title: 'Prohibited Activities',
      list: [
        'Providing false or misleading information',
        'Impersonating another person or entity',
        'Interfering with website functionality or security',
        'Using automated systems to access our services',
        'Engaging in fraudulent activities',
        'Violating any applicable laws or regulations',
        'Harassing or threatening our staff or other users'
      ]
    },
    {
      id: 'warranty',
      title: 'Warranty Disclaimer',
      content: 'EXCEPT AS EXPRESSLY PROVIDED IN WRITING, OUR SERVICES AND VEHICLES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE.'
    },
    {
      id: 'limitation',
      title: 'Limitation of Liability',
      content: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, AUTOVISIONTECH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM.'
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      content: 'You agree to indemnify and hold harmless AutoVisionTech, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of our services or violation of these terms.'
    },
    {
      id: 'dispute',
      title: 'Dispute Resolution',
      subsections: [
        {
          subtitle: 'Governing Law',
          content: 'These terms are governed by the laws of Tunisia, without regard to conflict of law principles.'
        },
        {
          subtitle: 'Arbitration',
          content: 'Any disputes arising from these terms or our services shall be resolved through binding arbitration, except where prohibited by law.'
        },
        {
          subtitle: 'Class Action Waiver',
          content: 'You agree to resolve disputes individually and waive any right to participate in class actions.'
        }
      ]
    },
    {
      id: 'modifications',
      title: 'Modifications to Terms',
      content: 'We reserve the right to modify these terms at any time. Material changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the modified terms.'
    },
    {
      id: 'severability',
      title: 'Severability',
      content: 'If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.'
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: 'For questions about these Terms of Service, please contact us at: Email: legal@autovision.com, Phone: +216 55 123 456, Address: Sfax, Tunisia'
    }
  ];

  protected quickLinks: QuickLink[] = [
    { label: 'Acceptance of Terms', id: 'acceptance' },
    { label: 'Eligibility', id: 'eligibility' },
    { label: 'User Accounts', id: 'account' },
    { label: 'Vehicle Purchases', id: 'purchases' },
    { label: 'Financing Services', id: 'financing' },
    { label: 'Trade-In Services', id: 'tradein' },
    { label: 'Prohibited Activities', id: 'prohibited' },
    { label: 'Contact Information', id: 'contact' }
  ];

  protected showImportantNotice = true;
  protected showContactCTA = true;
  protected contactEmail = 'legal@autovision.com';
  protected contactTitle = 'Have Questions About Our Terms?';
  protected contactDescription = 'Our legal team is here to help. Contact us if you have any questions or concerns about our Terms of Service.';
}