import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-logo',
  standalone: true,
  template: `
    <a href="/" class="logo-link" aria-label="Home">
      <div class="logo">ASA</div>
    </a>
  `,
  styles: [`
    .logo-link {
      text-decoration: none;
      color: var(--green);
      transition: var(--transition);
    }

    .logo {
      font-family: var(--font-mono);
      font-size: var(--fz-xl);
      font-weight: 600;
      padding: 10px;
    }

    .logo-link:hover {
      color: var(--green-tint);
    }

    .logo-link:focus-visible {
      outline: 2px solid var(--green);
      outline-offset: 3px;
      border-radius: 4px;
    }
  `]
})
export class NavLogoComponent {}