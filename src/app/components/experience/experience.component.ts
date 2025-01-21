import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { ExperienceItemComponent } from './experience-item.component';
import { Experience } from '../../interfaces/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, SectionHeaderComponent, ExperienceItemComponent],
  template: `
    <section id="experience" class="section">
      <app-section-header title="Where I've Worked" number="02." />
      <div class="experience-container">
        <div class="experience-list">
          <app-experience-item
            *ngFor="let experience of experiences; let i = index"
            [experience]="experience"
            [style.animation-delay]="i * 200 + 'ms'"
          />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-container {
      max-width: 800px;
      margin: 0 auto;
    }

    .experience-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  `]
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Software Engineer 1',
      company: 'Optum - UnitedHealth Group',
      location: 'Gurgram, Haryana',
      duration: 'April 2024 - Present',
      points: [
        'Enhanced APIs by implementing additional exception handling for improved error management',
        'Resolved 100+ secure and cloud vulnerabilities across multiple services, ensuring successful production deployments',
        'Designed and implemented a robust cron job scheduler to automate periodic database updates',
      ]
    },
    {
      title: 'Software Engineer Trainee',
      company: 'Crescerance- Engagifii',
      location: 'Noida, U.P',
      duration: 'March 2023 – December 2023',
      points: [
        'Added features in the existing front-end using Angular and TypeScript to include API payloads',
        'Designed a popup module with Filtering, Searching and Pagination capabilities',
        'Collaborated with front-end team to create components and integrate multiple API services',
        'Worked with Software Methodologies, Entity Framework, Azure DevOps, Postman and LINQ'
      ]
    }
  ];
}