import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '@shared/components/hero/hero';
import { InfoCard } from '@shared/components/info-card/info-card';

@Component({
  selector: 'app-warranty',
  standalone: true,
  imports: [CommonModule, Hero, InfoCard],
  templateUrl: './warranty.html',
  styleUrls: ['./warranty.css']
})
export class Warranty {
  protected heroIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" class="brand-icon w-15 h-15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
    </svg>
  `;

  protected benefits = [
    {
      icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      title: 'Nationwide Coverage',
      description: 'Get service at thousands of certified repair facilities across the country'
    },
    {
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      title: '24/7 Claims Support',
      description: 'File claims anytime through our dedicated hotline or online portal'
    },
    {
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4',
      title: 'Transferable',
      description: 'Transfer your warranty to a new owner to increase vehicle resale value'
    },
    {
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'No Deductible Options',
      description: 'Select plans with $0 deductible for maximum peace of mind'
    }
  ];

  protected covered = [
    'Engine: All internal parts including pistons, crankshaft, camshaft',
    'Transmission: Gears, shafts, bearings, seals, internal components',
    'Drive Axle: Axle shafts, universal joints, CV joints',
    'Electrical: Alternator, starter, wiring harness, ECU',
    'Cooling System: Radiator, water pump, thermostat',
    'Fuel System: Fuel pump, fuel injectors, fuel lines',
    'Steering: Power steering pump, rack and pinion',
    'Brakes: Master cylinder, wheel cylinders, ABS components',
    'Suspension: Shock absorbers, struts, control arms',
    'Air Conditioning: Compressor, condenser, evaporator'
  ];

  protected notCovered = [
    'Routine maintenance items (oil, filters, fluids)',
    'Wear and tear items (brake pads, wiper blades)',
    'Glass, lenses, and sealed beams',
    'Body parts and trim',
    'Tires and wheels (unless purchased separately)',
    'Pre-existing conditions',
    'Damage from accidents or misuse',
    'Modifications and aftermarket parts'
  ];

  protected claimSteps = [
    {
      step: '01',
      title: 'Contact Us',
      description: 'Call our claims hotline or file online as soon as you notice an issue',
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
    },
    {
      step: '02',
      title: 'Get Authorization',
      description: 'We will verify coverage and provide authorization for repairs',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      step: '03',
      title: 'Visit Facility',
      description: 'Take your vehicle to any certified repair facility in our network',
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
    },
    {
      step: '04',
      title: 'Get Repaired',
      description: 'Approved repairs are completed, and you\'re back on the road',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    }
  ];
}