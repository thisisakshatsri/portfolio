import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  template: `
    <div class="timeline">
      <div class="timeline-line timeline-animate"></div>
      <div class="timeline-dot"></div>
    </div>
  `,
  styles: [`
    .timeline {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .timeline-line {
      width: 2px;
      background: var(--green);
      height: 0;
    }

    .timeline-dot {
      position: absolute;
      width: 12px;
      height: 12px;
      background: var(--green);
      border-radius: 50%;
      top: 24px;
      left: -5px;
      animation: dotPulse 2s infinite;
    }
  `]
})
export class TimelineComponent {}