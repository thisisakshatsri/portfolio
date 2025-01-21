import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLinks } from './project.interface';

@Component({
  selector: 'app-project-links',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-links">
      <a *ngIf="links?.github" 
         [href]="links.github" 
         target="_blank" 
         class="link-item"
         aria-label="View source on GitHub">
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
        </svg>
      </a>
      <a *ngIf="links?.live" 
         [href]="links.live" 
         target="_blank" 
         class="link-item"
         aria-label="View live demo">
        <svg class="icon" viewBox="0 0 24 24">
          <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
        </svg>
      </a>
    </div>
  `,
  styles: [`
    .project-links {
      display: flex;
      gap: 1rem;
    }

    .link-item {
      padding: 0.5rem;
      border-radius: 8px;
      color: var(--light-slate);
      transition: all 0.2s ease;
    }

    .link-item:hover {
      color: var(--green);
      transform: translateY(-2px);
    }

    .icon {
      width: 20px;
      height: 20px;
    }
  `]
})
export class ProjectLinksComponent {
  @Input() links?: ProjectLinks;
}