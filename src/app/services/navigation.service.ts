import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activeSection = new BehaviorSubject<string>('home');
  activeSection$ = this.activeSection.asObservable();

  scrollToSection(sectionId: string, callback?: () => void): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      this.activeSection.next(sectionId);
      if (callback) {
        setTimeout(callback, 500);
      }
    }
  }

  updateActiveSection(sectionId: string): void {
    this.activeSection.next(sectionId);
  }
}