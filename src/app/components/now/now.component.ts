import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { FlipCardComponent } from './flip-card/flip-card.component';

@Component({
  selector: 'app-now',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, FlipCardComponent],
  template: `
    <section id="now" class="section">
      <app-section-header title="What I'm Up To" number="03." />
      <div class="cards-grid">
        <app-flip-card
          title="Reading"
          iconName="book"
          [items]="readingItems"
        />
        <app-flip-card
          title="Learning"
          iconName="learning"
          [items]="learningItems"
        />
      </div>
    </section>
  `,
  styles: [`
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 800px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    @media (max-width: 768px) {
      .cards-grid {
        grid-template-columns: 1fr;
        padding: 0 0.5rem;
      }
    }
  `]
})
export class NowComponent {
  readingItems = [
    'The Last Lecture - Randy Pausch',
    'The Battle for Home - Marwa Al-Sabouni',
    'Before the Coffee Gets Cold - Toshikazu Kawaguchi'
  ];

  learningItems = [
    'Guitar Fundamentals',
    '4x4 Rubik\'s Cube Mastery'
  ];
}