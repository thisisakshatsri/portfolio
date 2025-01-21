import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { Project } from './project.interface';

@Component({
  selector: 'app-project-grid',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  template: `
    <div class="projects-grid">
      <app-project-card
        *ngFor="let project of projects; let i = index"
        [project]="project"
        [style.--delay]="i * 100 + 'ms'"
        class="project-item"
      />
    </div>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 2rem;
      padding: 2rem 0;
    }

    .project-item {
      opacity: 0;
      transform: translateY(20px);
      animation: slideInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: var(--delay);
    }

    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
        padding: 1rem;
      }
    }
  `]
})
export class ProjectGridComponent {
  @Input() projects: Project[] = [];
}