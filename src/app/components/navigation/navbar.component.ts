import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu.component';
import { NavLogoComponent } from './nav-logo.component';
import { NavToggleComponent } from './nav-toggle.component';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NavMenuComponent, NavLogoComponent, NavToggleComponent],
  template: `
    <nav 
      class="navbar" 
      [class.scrolled]="isScrolled" 
      [class.nav-open]="isMenuOpen"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="nav-container">
        <app-nav-logo (click)="handleLogoClick($event)" />
        <div class="nav-right">
          <app-nav-toggle 
            [isOpen]="isMenuOpen" 
            (toggleMenu)="toggleMenu()"
          />
          <app-nav-menu 
            [isOpen]="isMenuOpen" 
            (menuClosed)="closeMenu()"
          />
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 70px;
      background: rgba(10, 25, 47, 0.85);
      backdrop-filter: blur(10px);
      z-index: 100;
      transition: var(--transition);
    }

    .navbar.scrolled {
      height: 60px;
      box-shadow: 0 10px 30px -10px var(--navy-shadow);
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      padding: 0 50px;
      max-width: 1600px;
      margin: 0 auto;
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    @media (max-width: 768px) {
      .nav-container {
        padding: 0 25px;
        position: relative;
        z-index: 110;
      }

      .navbar.nav-open {
        background: var(--navy);
      }

      .nav-right {
        position: static;
      }
    }
  `]
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  constructor(private navigationService: NavigationService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      document.body.style.overflow = '';
    }
  }

  handleLogoClick(event: Event): void {
    event.preventDefault();
    this.navigationService.scrollToSection('home');
    this.closeMenu();
  }
}