import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="activity-section">
      <h3>
        <span class="icon">{{ icon }}</span>
        {{ title }}
      </h3>
      <ul>
        <li *ngFor="let item of items; let i = index"
            [style.animation-delay]="i * 0.3 + 's'">
          {{ item }}
        </li>
      </ul>
    </div>
  `,
  styles: [`
    .activity-section {
      text-align: left;
    }

    h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--green);
      margin-bottom: 1rem;
      font-size: var(--fz-xl);
    }

    .icon {
      font-size: 1.2em;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      color: var(--slate);
      padding: 0.5rem 0.5rem 0.5rem 2rem;
      position: relative;
      opacity: 0;
      animation: fadeIn 0.5s ease-out forwards;
      transition: all 0.3s ease;
    }

    li::before {
      content: "›";
      position: absolute;
      left: 0.5rem;
      color: var(--green);
      transition: transform 0.2s ease;
    }

    li:hover {
      color: var(--green);
      transform: translateX(5px);
    }

    li:hover::before {
      transform: scale(1.2);
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .activity-section {
        padding: var(--spacing-md);
      }

      h3 {
        font-size: var(--fz-lg);
        margin-bottom: var(--spacing-sm);
      }

      li {
        padding: var(--spacing-xs) var(--spacing-xs) var(--spacing-xs) var(--spacing-lg);
        font-size: var(--fz-md);
      }

      li::before {
        left: var(--spacing-xs);
      }

      @media (prefers-reduced-motion: reduce) {
        li {
          animation: none;
          opacity: 1;
        }

        li:hover {
          transform: none;
        }
      }
    }
  `]
})
export class ActivityListComponent {
  @Input() title!: string;
  @Input() items: string[] = [];
  @Input() icon!: string;
}