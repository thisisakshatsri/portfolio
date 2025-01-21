import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `<h2 class="section-title">{{ title }}</h2>`,
  styles: [`
    .section-title {
      color: var(--lightest-slate);
      font-size: 32px;
      margin-bottom: 40px;
    }
  `]
})
export class SectionTitleComponent {
  @Input() title!: string;
}