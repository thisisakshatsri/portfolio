import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-now-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card" [class.is-flipped]="isFlipped" (click)="toggleFlip()">
      <div class="card-inner">
        <!-- Front -->
        <div class="card-face card-front">
          <span class="icon">{{ icon }}</span>
          <h3>{{ title }}</h3>
          <p class="hint">Click to reveal</p>
        </div>
        <!-- Back -->
        <div class="card-face card-back">
          <ul>  
            <li *ngFor="let item of items; let i = index"
                [style.animation-delay]="i * 0.1 + 's'">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background-color: transparent;
      perspective: 1000px;
      height: 300px;
      cursor: pointer;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .is-flipped .card-inner {
      transform: rotateY(180deg);
    }

    .card-face {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 12px;
      padding: 2rem;
      background: var(--light-navy);
      border: 1px solid var(--lightest-navy);
      transition: all 0.3s ease;
    }

    .card:hover .card-face {
      border-color: var(--green);
    }

    .card-front {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    h3 {
      color: var(--green);
      font-size: var(--fz-xl);
      margin-bottom: 0.5rem;
    }

    .hint {
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      opacity: 0.7;
    }

    .card-back {
      transform: rotateY(180deg);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      width: 100%;
    }

    li {
      color: var(--slate);
      padding: 0.75rem;
      margin-bottom: 0.5rem;
      border-radius: 6px;
      opacity: 0;
      transform: translateY(10px);
      animation: slideIn 0.3s ease-out forwards;
      transition: all 0.3s ease;
      text-align: left;
      position: relative;
      padding-left: 1.5rem;
    }

    li::before {
      content: "→";
      position: absolute;
      left: 0;
      color: var(--green);
      opacity: 0;
      transform: translateX(-10px);
      transition: all 0.3s ease;
    }

    li:hover {
      color: var(--green);
      background: var(--green-tint);
      transform: translateX(5px);
    }

    li:hover::before {
      opacity: 1;
      transform: translateX(0);
    }

    @keyframes slideIn {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class NowCardComponent {
  @Input() title!: string;
  @Input() icon!: string;
  @Input() items: string[] = [];
  
  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}