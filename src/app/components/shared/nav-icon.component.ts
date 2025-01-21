import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-icon',
  standalone: true,
  template: `
    <svg 
      class="nav-icon" 
      [attr.aria-label]="name"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      @switch (name) {
        @case ('home') {
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        }
        @case ('about') {
          <circle cx="12" cy="8" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        }
        @case ('experience') {
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        }
        @case ('projects') {
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        }
        @case ('now') {
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        }
        @case ('connect') {
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        }
      }
    </svg>
  `,
  styles: [`
    .nav-icon {
      width: 20px;
      height: 20px;
      transition: var(--transition);
    }

    :host-context(.active) .nav-icon {
      color: var(--green);
    }

    @media (max-width: 768px) {
      .nav-icon {
        width: 24px;
        height: 24px;
      }
    }
  `]
})
export class NavIconComponent {
  @Input() name!: 'home' | 'about' | 'experience' | 'projects' | 'now' | 'connect';
}