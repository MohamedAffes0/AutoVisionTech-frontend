import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '@shared/components/hero/hero';

export interface LegalSection {
  id: string;
  title: string;
  content?: string;
  subsections?: Array<{
    subtitle: string;
    content: string;
  }>;
  list?: string[];
}

export interface QuickLink {
  label: string;
  id: string;
}

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [CommonModule, Hero],
  templateUrl: './legal-page.html',
  styleUrls: ['./legal-page.css']
})
export class LegalPage {
  @Input() heroName: string = '';
  @Input() heroSubtitle: string = '';
  @Input() heroIcon: string = '';
  @Input() lastUpdated?: string;
  @Input() sections: LegalSection[] = [];
  @Input() quickLinks: QuickLink[] = [];
  @Input() showImportantNotice: boolean = false;
  @Input() showContactCTA: boolean = false;
  @Input() contactEmail?: string;
  @Input() contactTitle?: string;
  @Input() contactDescription?: string;

  protected scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}