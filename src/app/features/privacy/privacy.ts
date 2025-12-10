import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalPage, LegalSection, QuickLink } from '@shared/components/legal-page/legal-page';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, LegalPage],
  templateUrl: './privacy.html',
  styleUrls: ['./privacy.css', '../../shared/styles/legal-pages.css']
})
export class Privacy {
  protected heroIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="brand-icon w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
    </svg>
  `;

  protected heroName = 'Privacy Policy';
  protected heroSubtitle = 'Your Privacy Matters - Learn How We Protect Your Information';
  protected lastUpdated = 'December 10, 2025';

  protected sections: LegalSection[] = [
    {
      id: 'introduction',
      title: 'Introduction',
      content: 'At AutoVisionTech, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.'
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      subsections: [
        {
          subtitle: 'Personal Information',
          content: 'We collect information that you provide directly to us, including: name, email address, phone number, postal address, driver\'s license information, financial information for credit applications, vehicle trade-in information, and communication preferences.'
        },
        {
          subtitle: 'Automatically Collected Information',
          content: 'When you visit our website, we automatically collect: IP address, browser type, device information, pages visited and time spent, referring website addresses, and cookies and similar technologies.'
        },
        {
          subtitle: 'Vehicle Information',
          content: 'We collect information about vehicles you view, purchase, or trade-in, including: vehicle identification numbers (VIN), make, model, year, mileage, condition reports, service history, and purchase/lease agreements.'
        }
      ]
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      list: [
        'Process vehicle purchases, financing applications, and trade-ins',
        'Communicate with you about our products and services',
        'Send marketing communications (with your consent)',
        'Improve our website and customer service',
        'Comply with legal obligations and prevent fraud',
        'Analyze usage patterns to enhance user experience',
        'Maintain security and prevent unauthorized access'
      ]
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      subsections: [
        {
          subtitle: 'Service Providers',
          content: 'We share information with trusted third-party service providers who assist us in: payment processing, financing and credit checks, vehicle history reports, shipping and delivery services, marketing and analytics, and IT services and security.'
        },
        {
          subtitle: 'Financial Institutions',
          content: 'We share necessary information with banks and financial institutions to process financing applications and complete transactions.'
        },
        {
          subtitle: 'Legal Requirements',
          content: 'We may disclose information when required by law, to protect our rights, prevent fraud, or respond to legal processes.'
        }
      ]
    },
    {
      id: 'data-security',
      title: 'Data Security',
      content: 'We implement industry-standard security measures to protect your information, including: SSL/TLS encryption for data transmission, secure servers and databases, regular security audits and updates, employee training on data protection, access controls and authentication, and regular backup procedures. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      list: [
        'Access: Request access to your personal information',
        'Correction: Request correction of inaccurate information',
        'Deletion: Request deletion of your information (subject to legal requirements)',
        'Opt-Out: Unsubscribe from marketing communications at any time',
        'Data Portability: Request a copy of your data in a portable format',
        'Restriction: Request limitation on how we process your information'
      ]
    },
    {
      id: 'cookies',
      title: 'Cookies and Tracking Technologies',
      content: 'We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookies through your browser settings. Types of cookies we use include: essential cookies for website functionality, analytics cookies to understand usage patterns, preference cookies to remember your settings, and advertising cookies for targeted marketing (with consent).'
    },
    {
      id: 'third-party',
      title: 'Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.'
    },
    {
      id: 'children',
      title: 'Children\'s Privacy',
      content: 'Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.'
    },
    {
      id: 'international',
      title: 'International Data Transfers',
      content: 'Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.'
    },
    {
      id: 'retention',
      title: 'Data Retention',
      content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on the type of information and applicable regulations.'
    },
    {
      id: 'changes',
      title: 'Changes to This Policy',
      content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      content: 'If you have questions about this Privacy Policy or our data practices, please contact us at: Email: privacy@autovision.com, Phone: +216 55 123 456, Address: Sfax, Tunisia'
    }
  ];

  protected quickLinks: QuickLink[] = [
    { label: 'Introduction', id: 'introduction' },
    { label: 'Information Collection', id: 'information-collection' },
    { label: 'How We Use Information', id: 'how-we-use' },
    { label: 'Information Sharing', id: 'information-sharing' },
    { label: 'Data Security', id: 'data-security' },
    { label: 'Your Rights', id: 'your-rights' },
    { label: 'Cookies', id: 'cookies' },
    { label: 'Contact Us', id: 'contact' }
  ];

  protected showImportantNotice = true;
  protected showContactCTA = true;
  protected contactEmail = 'privacy@autovision.com';
  protected contactTitle = 'Have Questions About Our Privacy Policy?';
  protected contactDescription = 'Our privacy team is here to help. Contact us if you have any questions or concerns about how we handle your information.';
}