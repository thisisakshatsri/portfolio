import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  template: `
    <div class="section-header">
      <div class="header-content">
        <h2 class="section-title">
          <span class="section-number">{{ number }}</span>
          {{ title }}
        </h2>
        <div class="decorative-line"></div>
      </div>
    </div>
  `,
  styles: [`
    .section-header {
      margin-bottom: 40px;
      width: 100%;
    }

    .header-content {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .section-title {
      display: flex;
      align-items: baseline;
      gap: 12px;
      white-space: nowrap;
      font-size: clamp(26px, 5vw, 32px);
      font-weight: 600;
      color: var(--lightest-slate);
    }

    .section-number {
      font-family: var(--font-mono);
      font-size: clamp(16px, 3vw, 20px);
      font-weight: 400;
      color: var(--green);
    }

    .decorative-line {
      flex: 1;
      height: 2px;
      background: linear-gradient(
        to right,
        var(--green) 0%,
        var(--lightest-navy) 100%
      );
      margin-left: 20px;
      opacity: 0.3;
    }

    @media (max-width: 768px) {
      .section-header {
        margin-bottom: 30px;
      }

      .decorative-line {
        flex: 0.5;
      }
    }
  `]
})
export class SectionHeaderComponent {
  @Input() title!: string;
  @Input() number!: string;
}