import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[intersectionObserver]',
  standalone: true
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver;

  constructor(private element: ElementRef) {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          this.observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );
  }

  ngOnInit() {
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}