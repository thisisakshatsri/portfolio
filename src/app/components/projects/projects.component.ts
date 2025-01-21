import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { ProjectGridComponent } from './project-grid.component';
import { Project } from './project.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ProjectGridComponent],
  template: `
    <section id="projects" class="section">
      <app-section-header title="Featured Projects" number="03." />
      <app-project-grid [projects]="projects" />
    </section>
  `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'MCA Cube',
      description: 'A hub for MCA students with curated materials, notes, and references.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      links: {
        github: 'https://github.com/thisisakshatsri/mca-cube',
        live: 'https://thisisakshatsri.github.io/mca-cube'
      },
      featured: true
    },
    {
      title: 'Sorting Visualizer',
      description: 'An interactive tool showcasing sorting algorithms through animations.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      links: {
        github: 'https://github.com/thisisakshatsri/sorting-visualizer',
        live: 'https://thisisakshatsri.github.io/sorting-visualizer'
      },
      featured: true
    }
  ];
}