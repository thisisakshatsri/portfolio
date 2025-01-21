import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="skills-list">
      <li *ngFor="let skill of skills">{{ skill }}</li>
    </ul>
  `,
  styles: [`
    .skills-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 200px));
      gap: 0 10px;
      padding: 0;
      margin: 20px 0 0 0;
      overflow: hidden;
      list-style: none;
    }

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: 13px;
    }

    li::before {
      content: "▸";
      position: absolute;
      left: 0;
      color: var(--green);
    }
  `]
})
export class SkillListComponent {
  @Input() skills: string[] = [];
}