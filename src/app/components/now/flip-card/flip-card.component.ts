import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon.component';

@Component({
  selector: 'app-flip-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div 
      class="flip-card" 
      [class.is-flipped]="isFlipped" 
      (click)="toggleFlip()"
      role="button"
      tabindex="0"
      [attr.aria-label]="'View ' + title + ' details'"
      [attr.aria-expanded]="isFlipped"
      (keydown.enter)="toggleFlip()"
      (keydown.space)="$event.preventDefault(); toggleFlip()"
    >
      <div class="flip-card-inner">
        <!-- Front -->
        <div class="flip-card-front">
          <div class="icon-wrapper">
            <app-icon [name]="iconName" />
          </div>
          <h3>{{ title }}</h3>
          <p class="hint">Click to reveal</p>
        </div>
        <!-- Back -->
        <div class="flip-card-back">
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
    .flip-card {
      background-color: transparent;
      perspective: 1000px;
      height: 300px;
      cursor: pointer;
      user-select: none;
      outline: none;
    }

    .flip-card:focus-visible {
      outline: 2px solid var(--green);
      outline-offset: 4px;
      border-radius: 12px;
    }

    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.6s;
      transform-style: preserve-3d;
      border-radius: 12px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .is-flipped .flip-card-inner {
      transform: rotateY(180deg);
    }

    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 12px;
      padding: 2rem;
      background: var(--light-navy);
      border: 1px solid var(--lightest-navy);
      transition: border-color 0.3s ease;
    }

    .flip-card:hover .flip-card-front,
    .flip-card:hover .flip-card-back {
      border-color: var(--green);
    }

    .flip-card-front {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    }

    .icon-wrapper {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      transition: transform 0.3s ease;
    }

    .flip-card:hover .icon-wrapper {
      transform: translateY(-5px);
    }

    h3 {
      color: var(--green);
      font-size: var(--fz-xl);
      margin: 0;
    }

    .hint {
      color: var(--slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      opacity: 0.7;
    }

    .flip-card-back {
      transform: rotateY(180deg);
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: left;
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

    @media (max-width: 768px) {
      .flip-card {
        height: 250px;
      }

      .icon-wrapper {
        width: 40px;
        height: 40px;
      }
    }
  `]
})
export class FlipCardComponent {
  @Input() title!: string;
  @Input() iconName!: 'book' | 'learning' | 'music' | 'code' | 'hobby';
  @Input() items: string[] = [];
  
  isFlipped = false;

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }
}