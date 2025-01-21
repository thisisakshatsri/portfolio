import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { SkillListComponent } from '../shared/skill-list.component';
import { ProfileImageComponent } from './profile-image.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeaderComponent, SkillListComponent, ProfileImageComponent],
  template: `
    <section id="about" class="about-section">
      <div class="content-wrapper">
        <div class="text-content">
          <app-section-header title="About Me" number="01." />
          <div class="bio">
            <p class="bio-text">
              Passionate about web technologies, graphic design, and solving problems. When I'm not coding, 
              I'm either diving into self-help books or enjoying the company of people who inspire me to grow.
            </p>
            <p class="quote">
              "If you always do what interests you, at least one person is pleased."
              <span class="quote-author">- Katharine Hepburn</span>
            </p>
            <div class="skills-container">
              <h3 class="skills-title">Tech Stack</h3>
              <app-skill-list [skills]="skills" />
            </div>
          </div>
        </div>
        <div class="image-section">
          <app-profile-image />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 100px 0;
      margin-top: 60px;
    }

    .content-wrapper {
      display: grid;
      grid-template-columns: 3fr 2fr;
      gap: 50px;
      align-items: start;
      max-width: 900px;
      margin: 0 auto;
    }

    .text-content {
      max-width: 540px;
    }

    .bio-text {
      color: var(--slate);
      font-size: var(--fz-lg);
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .quote {
      color: var(--lightest-slate);
      font-style: italic;
      font-size: var(--fz-lg);
      margin: 30px 0;
      padding-left: 20px;
      border-left: 2px solid var(--green);
    }

    .quote-author {
      display: block;
      color: var(--green);
      font-size: var(--fz-md);
      margin-top: 10px;
    }

    .skills-container {
      margin-top: 40px;
    }

    .skills-title {
      color: var(--lightest-slate);
      font-size: var(--fz-md);
      font-family: var(--font-mono);
      margin-bottom: 20px;
    }

    .image-section {
      position: relative;
      max-width: 300px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      .content-wrapper {
        grid-template-columns: 1fr;
      }

      .text-content {
        max-width: 100%;
      }

      .image-section {
        order: -1;
        margin-bottom: 40px;
      }
    }
  `]
})
export class AboutComponent {
  skills = [
    'TypeScript',
    'JavaScript (ES6+)',
    'Node.js',
    'Angular',
    'Java',
    'Jenkins'
  ];
}