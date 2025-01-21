import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section class="hero">
      <div class="hero-content">
        <h1 class="fade-in main-title" style="animation-delay: 100ms;">
          <span class="greeting">Hi, I'm</span>
          <span class="name">Akshat Srivastava</span>
          <span class="tagline">I write code.</span>
        </h1>
        <p class="fade-in description" style="animation-delay: 300ms;">
          I'm a Software Engineer at <span class="highlight">Optum - UnitedHealth Group</span>. Specializing in building exceptional digital experiences. Driven to build impactful products with a steadfast focus on clean, maintainable code.
        </p>
        <div class="cta fade-in" style="animation-delay: 400ms;">
          <a href="#contact" class="button">Download Resume</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 20px;
      max-width: 1000px;
      margin: 0 auto;
    }

    .hero-content {
      max-width: 800px;
    }

    .main-title {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .greeting {
      font-size: clamp(16px, 5vw, 20px);
      font-family: var(--font-mono);
      color: var(--green);
    }

    .name {
      font-size: clamp(40px, 8vw, 80px);
      font-weight: 600;
      color: var(--lightest-slate);
    }

    .tagline {
      font-size: clamp(30px, 5vw, 50px);
      font-weight: 400;
      color: var(--slate);
      font-family: var(--font-mono);
    }

    .description {
      font-size: var(--fz-lg);
      max-width: 540px;
      margin: 20px 0 0;
      color: var(--slate);
      line-height: 1.6;
    }

    .highlight {
      color: var(--green);
      font-weight: 400;
    }

    .cta {
      margin-top: 50px;
    }

    .button {
      position: relative;
      overflow: hidden;
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: var(--green-tint);
      transition: transform 0.5s ease;
      z-index: -1;
    }

    .button:hover::before {
      transform: translateX(100%);
    }
  `]
})
export class HeroComponent {}