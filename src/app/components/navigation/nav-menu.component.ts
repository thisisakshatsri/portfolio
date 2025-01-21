import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavIconComponent } from '../shared/nav-icon.component';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [CommonModule, NavIconComponent],
  template: `
    <div class="nav-backdrop" *ngIf="isOpen" (click)="handleBackdropClick()"></div>
    <ul 
      class="nav-menu" 
      [class.menu-open]="isOpen" 
      role="menubar"
      aria-label="Main navigation"
    >
      <li *ngFor="let item of menuItems" role="none">
        <a 
          [href]="item.href"
          class="nav-link"
          [class.active]="(navigationService.activeSection$ | async) === item.id"
          role="menuitem"
          [attr.aria-current]="(navigationService.activeSection$ | async) === item.id ? 'page' : null"
          (click)="handleNavClick($event, item.id)"
        >
          <app-nav-icon [name]="item.icon" />
          <span class="nav-text">{{ item.label }}</span>
        </a>
      </li>
    </ul>
  `,
  styles: [`
    .nav-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(2, 12, 27, 0.85);
      backdrop-filter: blur(10px);
      z-index: 90;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.5rem;
      color: var(--light-slate);
      text-decoration: none;
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      transition: var(--transition);
      border-radius: var(--border-radius-sm);
    }

    @media (max-width: 768px) {
      .nav-backdrop.menu-open {
        opacity: 1;
        visibility: visible;
      }

      .nav-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        max-width: 425px;
        height: 100vh;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        background: linear-gradient(
          135deg, 
          var(--navy) 0%,
          rgba(17, 34, 64, 0.95) 100%
        );
        backdrop-filter: blur(10px);
        padding: 100px 40px;
        transform: translateX(100%);
        transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
        box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
        border-left: 2px solid var(--green-tint);
      }

      .menu-open {
        transform: translateX(0);
      }

      .nav-link {
        position: relative;
        width: 100%;
        padding: 15px 25px;
        font-family: var(--font-mono);
        font-size: var(--fz-xl);
        font-weight: 500;
        letter-spacing: 0.5px;
        color: var(--lightest-slate);
        border-radius: 8px;
        background: transparent;
        opacity: 0;
        transform: translateX(50px);
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        display: flex;
        align-items: center;
        gap: 20px;
      }

      app-nav-icon {
        width: 24px;
        height: 24px;
        color: var(--green);
        flex-shrink: 0;
      }

      .nav-text {
        font-size: var(--fz-lg);
      }

      /* Active and hover states */
      .nav-link.active {
        color: var(--green);
        background: var(--light-navy);
      }

      .nav-link:hover {
        background: var(--light-navy);
        transform: translateX(10px);
      }

      /* Stagger animation for menu items */
      .menu-open .nav-link {
        opacity: 1;
        transform: translateX(0);
      }

      @for $i from 1 through 6 {
        .menu-open .nav-link:nth-child(#{$i}) {
          transition-delay: #{0.1 + ($i * 0.1)}s;
        }
      }
    }

    .nav-link:hover,
    .nav-link.active {
      color: var(--green);
      background: var(--green-tint);
    }

    .nav-text {
      position: relative;
    }

    /* Add smooth transition for backdrop */
    .nav-backdrop.menu-open {
      opacity: 1;
      visibility: visible;
    }

    /* Add touch feedback */
    @media (hover: hover) and (pointer: fine) {
      .nav-link:hover {
        background: var(--green-tint);
        transform: translateX(5px);
      }
    }

    /* Reduce motion if preferred */
    @media (prefers-reduced-motion: reduce) {
      .nav-link {
        transition: none;
        transform: none;
      }
      
      .nav-link:hover,
      .nav-link:active {
        transform: none;
      }
    }
  `]
})
export class NavMenuComponent {
  @Input() isOpen = false;
  @Output() menuClosed = new EventEmitter<void>();

  menuItems = [
    { id: 'home', href: '#', label: 'Home', icon: 'home' as const },
    { id: 'about', href: '#about', label: 'About', icon: 'about' as const },
    { id: 'experience', href: '#experience', label: 'Experience', icon: 'experience' as const },
    { id: 'projects', href: '#projects', label: 'Projects', icon: 'projects' as const },
    { id: 'now', href: '#now', label: 'Now', icon: 'now' as const },
    { id: 'contact', href: '#contact', label: 'Contact', icon: 'connect' as const },
  ];

  constructor(public navigationService: NavigationService) {}

  handleNavClick(event: Event, sectionId: string): void {
    event.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.navigationService.updateActiveSection('home');
    } else {
      this.navigationService.scrollToSection(sectionId);
    }
    this.menuClosed.emit();
  }

  handleBackdropClick(): void {
    this.menuClosed.emit();
  }
}