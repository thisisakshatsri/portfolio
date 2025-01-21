import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineIconComponent } from './timeline-icon.component';
import { Experience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule, TimelineIconComponent],
  template: `
    <div class="experience-item fade-in">
      <div class="timeline-marker">
        <app-timeline-icon />
      </div>
      <div class="experience-content">
        <div class="experience-header">
          <div class="title-wrapper">
            <h3 class="title">{{ experience.title }}</h3>
            <span class="company">{{ experience.company }}</span>
          </div>
          <span class="duration">{{ experience.duration }}</span>
        </div>
        <ul class="points-list">
          <li *ngFor="let point of experience.points; let i = index" 
              class="slide-in"
              [style.animation-delay]="i * 100 + 'ms'">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .experience-item {
      position: relative;
      display: flex;
      gap: 2rem;
      padding: 1.5rem;
      border-radius: 8px;
      transition: all 0.3s ease;
      background: transparent;
    }

    .experience-item:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .timeline-marker {
      position: relative;
      flex-shrink: 0;
    }

    .timeline-marker::after {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      width: 2px;
      height: calc(100% + 1.5rem);
      background: var(--green);
      transform: translateX(-50%);
      opacity: 0.3;
    }

    .experience-item:last-child .timeline-marker::after {
      display: none;
    }

    .experience-content {
      flex: 1;
    }

    .experience-header {
      margin-bottom: 1rem;
    }

    .title-wrapper {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      flex-wrap: wrap;
      margin-bottom: 0.5rem;
    }

    .title {
      color: var(--lightest-slate);
      font-size: var(--fz-xl);
      margin: 0;
    }

    .company {
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-md);
    }

    .duration {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: var(--light-slate);
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.05);
    }

    .points-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .points-list li {
      position: relative;
      padding-left: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--light-slate);
      font-size: var(--fz-md);
      line-height: 1.5;
    }

    .points-list li::before {
      content: "▹";
      position: absolute;
      left: 0;
      color: var(--green);
    }
  `]
})
export class ExperienceItemComponent {
  @Input() experience!: Experience;
}