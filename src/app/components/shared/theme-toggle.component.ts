import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="theme-toggle"
      (click)="themeService.toggleTheme()"
      [attr.aria-label]="(themeService.isDarkMode$ | async) ? 'Switch to light mode' : 'Switch to dark mode'"
    >
      <svg
        *ngIf="themeService.isDarkMode$ | async"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      <svg
        *ngIf="!(themeService.isDarkMode$ | async)"
        class="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  `,
  styles: [`
    .theme-toggle {
      background: none;
      border: none;
      padding: 8px;
      cursor: pointer;
      color: var(--theme-toggle-color);
      transition: color 0.3s ease, transform 0.2s ease;
    }

    .theme-toggle:hover {
      color: var(--green);
      transform: scale(1.1);
    }

    .icon {
      width: 20px;
      height: 20px;
    }
  `]
})
export class ThemeToggleComponent {
  constructor(public themeService: ThemeService) {}
}