import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialIconComponent } from '../shared/social-icon.component';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule, SocialIconComponent],
  template: `
    <div class="social-links">
      <a href="https://github.com/thisisakshatsri" 
         target="_blank" 
         class="social-link"
         aria-label="GitHub Profile">
        <app-social-icon name="github" />
        <span class="username">thisisakshatsri</span>
      </a>
      <a href="https://linkedin.com/in/thisisakshatsri" 
         target="_blank" 
         class="social-link"
         aria-label="LinkedIn Profile">
        <app-social-icon name="linkedin" />
        <span class="username">thisisakshatsri</span>
      </a>
      <a href="https://x.com/thisisakshatsri" 
         target="_blank" 
         class="social-link"
         aria-label="X (Twitter) Profile">
        <app-social-icon name="x" />
        <span class="username">thisisakshatsri</span>
      </a>
    </div>
  `,
  styles: [`
    .social-links {
      display: flex;
      gap: 2rem;
      justify-content: center;
      margin-top: 2rem;
      flex-wrap: wrap;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--slate);
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: var(--border-radius-sm);
      transition: var(--transition);
    }

    .social-link:hover {
      color: var(--green);
      transform: translateY(-2px);
      background: var(--green-tint);
    }

    .username {
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }
  `]
})
export class SocialLinksComponent {}