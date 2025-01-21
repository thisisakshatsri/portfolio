import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg 
      [class]="'icon ' + name" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      stroke-width="2" 
      stroke-linecap="round" 
      stroke-linejoin="round"
      width="24"
      height="24"
      aria-hidden="true"
    >
      @switch (name) {
        @case ('book') {
          <!-- Book icon with consistent style -->
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        }
        @case ('learning') {
          <!-- Learning/Education icon -->
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        }
        @case ('music') {
          <!-- Music icon -->
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        }
        @case ('code') {
          <!-- Code icon -->
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        }
        @case ('hobby') {
          <!-- Hobby/Activity icon -->
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        }
      }
    </svg>
  `,
  styles: [`
    .icon {
      display: inline-block;
      vertical-align: middle;
      transition: transform 0.3s ease;
      color: var(--green);
    }

    /* Consistent hover effect for all icons */
    .icon:hover {
      transform: translateY(-2px);
    }

    /* Size variations while maintaining proportions */
    .icon.small {
      width: 16px;
      height: 16px;
    }

    .icon.large {
      width: 32px;
      height: 32px;
    }

    /* Specific icon adjustments */
    .icon.book {
      stroke-width: 1.5;
    }

    .icon.learning {
      stroke-width: 1.75;
    }

    .icon.music {
      stroke-width: 1.5;
    }

    .icon.code {
      stroke-width: 2;
    }

    .icon.hobby {
      stroke-width: 1.75;
    }

    @media (max-width: 768px) {
      .icon {
        width: 20px;
        height: 20px;
      }
    }
  `]
})
export class IconComponent {
  @Input() name!: 'book' | 'learning' | 'music' | 'code' | 'hobby';
}