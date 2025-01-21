import { Component } from '@angular/core';

@Component({
  selector: 'app-flip-card-front',
  standalone: true,
  template: `
    <div class="flip-card-front">
      <h2>For Now</h2>
      <p>Click to reveal what I'm up to</p>
    </div>
  `,
  styles: [`
    .flip-card-front {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      background: var(--light-navy);
      color: var(--lightest-slate);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      padding: 2rem;
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--green);
    }

    p {
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
    }
  `]
})
export class FlipCardFrontComponent {}