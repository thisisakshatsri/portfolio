import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityListComponent } from './activity-list.component';

@Component({
  selector: 'app-flip-card-back',
  standalone: true,
  imports: [CommonModule, ActivityListComponent],
  template: `
    <div class="flip-card-back">
      <app-activity-list
        title="Reading"
        [items]="readingItems"
        icon="📚"
      />
      <app-activity-list
        title="Learning"
        [items]="learningItems"
        icon="💡"
      />
    </div>
  `,
  styles: [`
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      background: var(--light-navy);
      transform: rotateY(180deg);
      border-radius: 12px;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      overflow-y: auto;
    }
  `]
})
export class FlipCardBackComponent {
  readingItems = [
    'The Last Lecture - Randy Pausch',
    'The Battle for Home - Marwa Al-Sabouni',
    'Before the Coffee Gets Cold - Toshikazu Kawaguchi'
  ];

  learningItems = [
    'Guitar',
    '4x4 Rubik\'s Cube'
  ];
}