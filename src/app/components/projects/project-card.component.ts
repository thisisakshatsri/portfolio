import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './project.interface';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="project-card" [class.featured]="project.featured">
      <div class="card-content">
        <header class="card-header">
          <div class="project-type">{{ project.featured ? 'Featured Project' : 'Project' }}</div>
          <h3 class="project-title">{{ project.title }}</h3>
          <div class="project-links">
            <a *ngIf="project.links?.github" 
               [href]="project.links.github" 
               target="_blank" 
               class="link-item"
               aria-label="View source on GitHub">
              <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
            </a>
            <a *ngIf="project.links?.live" 
               [href]="project.links.live" 
               target="_blank" 
               class="link-item"
               aria-label="View live demo">
              <svg class="icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/>
              </svg>
            </a>
          </div>
        </header>
        
        <div class="project-info">
          <p class="project-description">{{ project.description }}</p>
          <ul class="tech-stack">
            <li *ngFor="let tech of project.technologies" class="tech-item">
              {{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .project-card {
      position: relative;
      background: var(--card-background, rgba(255, 255, 255, 0.02));
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .project-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom right,
        transparent,
        rgba(100, 255, 218, 0.03)
      );
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .project-card:hover::before {
      opacity: 1;
    }

    .card-content {
      position: relative;
      padding: 2rem;
    }

    .card-header {
      margin-bottom: 1.5rem;
    }

    .project-type {
      font-family: var(--font-mono);
      font-size: 0.875rem;
      color: var(--green);
      margin-bottom: 0.5rem;
    }

    .project-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--lightest-slate);
      margin: 0 0 1rem;
    }

    .project-description {
      color: var(--light-slate);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

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

    .tech-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .tech-item {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--green);
      background: var(--green-tint);
      padding: 0.35rem 0.75rem;
      border-radius: 12px;
      transition: all 0.2s ease;
    }

    .tech-item:hover {
      transform: translateY(-2px);
      background: rgba(100, 255, 218, 0.2);
    }

    .featured {
      grid-column: 1 / -1;
    }

    @media (min-width: 768px) {
      .featured .card-content {
        display: grid;
        grid-template-columns: 1.5fr 1fr;
        gap: 2rem;
      }
    }
  `]
})
export class ProjectCardComponent {
  @Input() project!: Project;
}