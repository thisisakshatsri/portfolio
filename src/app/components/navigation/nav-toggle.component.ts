import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-toggle',
  standalone: true,
  template: `
    <button 
      class="nav-toggle" 
      [class.open]="isOpen"
      (click)="toggleMenu.emit()"
      aria-label="Toggle menu"
      [attr.aria-expanded]="isOpen"
    >
      <div class="hamburger">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </div>
    </button>
  `,
  styles: [`
    .nav-toggle {
      display: none;
      background: transparent;
      border: none;
      padding: 12px;
      cursor: pointer;
      outline: none;
      z-index: 1000;
      position: relative;
      border-radius: 50%;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hamburger {
      position: relative;
      width: 30px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .line {
      position: absolute;
      width: 100%;
      height: 2px;
      background: var(--green);
      border-radius: 4px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .line-1 {
      transform: translateY(-8px);
      width: 24px;
      left: auto;
      right: 0;
    }

    .line-2 {
      width: 30px;
    }

    .line-3 {
      transform: translateY(8px);
      width: 18px;
      left: auto;
      right: 0;
    }

    /* Animated hamburger - open state */
    .open .line-1 {
      transform: translateY(0) rotate(45deg);
      width: 30px;
    }

    .open .line-2 {
      opacity: 0;
      transform: translateX(10px);
    }

    .open .line-3 {
      transform: translateY(0) rotate(-45deg);
      width: 30px;
    }

    @media (max-width: 768px) {
      .nav-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        margin-right: -12px;
        
        /* Hover effect */
        &:hover {
          .line-1 {
            width: 30px;
            transform: translateY(-6px);
          }
          
          .line-3 {
            width: 30px;
            transform: translateY(6px);
          }
        }
        
        /* Active state */
        &:active {
          transform: scale(0.95);
        }
        
        /* Open state hover */
        &.open:hover {
          .line-1 {
            transform: rotate(45deg);
          }
          
          .line-3 {
            transform: rotate(-45deg);
          }
        }
      }

      /* Focus styles */
      .nav-toggle:focus-visible {
        outline: 2px solid var(--green);
        outline-offset: 4px;
        background: var(--light-navy);
      }

      /* Add glow effect on hover */
      .nav-toggle:hover .line {
        box-shadow: 0 0 8px var(--green-tint);
      }

      /* Add smooth transition for background */
      .nav-toggle::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: var(--light-navy);
        opacity: 0;
        transition: opacity 0.3s ease;
      }

      .nav-toggle:hover::before {
        opacity: 0.5;
      }
    }

    /* Reduce motion if preferred */
    @media (prefers-reduced-motion: reduce) {
      .line {
        transition: none;
      }
      
      .nav-toggle:hover .line-1,
      .nav-toggle:hover .line-3 {
        transform: none;
      }
    }
  `]
})
export class NavToggleComponent {
  @Input() isOpen = false;
  @Output() toggleMenu = new EventEmitter<void>();
}