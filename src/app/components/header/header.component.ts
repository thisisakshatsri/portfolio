import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <nav>
        <div class="logo magic-hover" (click)="scrollToTop()">/home</div>
        <!-- Rest of the navigation items remain unchanged -->
      </nav>
    </header>
  `,
  styles: [`
    .logo {
      cursor: pointer;
      user-select: none;
    }
  `]
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToTop(): void {
    this.scrollService.scrollToTop();
  }
}