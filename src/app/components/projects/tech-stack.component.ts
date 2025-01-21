import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="tech-stack">
      <li *ngFor="let tech of technologies" class="tech-item">
        {{ tech }}
      </li>
    </ul>
  `,
  styles: [`
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
  `]
})
export class TechStackComponent {
  @Input() technologies: string[] = [];
}