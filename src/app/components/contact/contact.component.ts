import { Component } from '@angular/core';
import { SectionHeaderComponent } from '../shared/section-header.component';
import { SocialLinksComponent } from './social-links.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SectionHeaderComponent, SocialLinksComponent],
  template: `
    <section id="contact" class="contact-section">
      <div class="contact-container">
        <app-section-header title="Let's Connect!" number="04." />
        <p class="contact-text">
          I'm actively seeking exciting opportunities in software engineering and would love to connect 
          with fellow developers, tech enthusiasts, and potential collaborators. Whether you have 
          questions about my work, want to discuss potential opportunities, or simply wish to exchange 
          ideas, I'm always eager to engage in meaningful conversations.
        </p>
        <app-social-links />
        <div class="cta-buttons">
          <a 
            href="mailto:akshat.srivastava643@gmail.com" 
            class="button primary"
            role="button"
            aria-label="Send email"
            (click)="handleEmailClick($event)"
          >
            Say Hello 👋
          </a>
          <a 
            href="/resume.pdf" 
            class="button secondary"
            role="button"
            aria-label="Download resume"
            download
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 100px 0;
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }

    .contact-text {
      color: var(--slate);
      margin: 2rem 0;
      font-size: var(--fz-lg);
      line-height: 1.6;
    }

    .cta-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      margin-top: 3rem;
    }

    .button {
      font-size: var(--fz-md);
      padding: 1rem 2rem;
      position: relative;
      overflow: hidden;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 160px;
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: var(--green-tint);
      transition: transform 0.3s ease;
      z-index: -1;
    }

    .button:hover::before {
      transform: translateX(100%);
    }

    .button:active {
      transform: translateY(2px);
    }

    @media (max-width: 768px) {
      .contact-section {
        padding: 50px 20px;
      }

      .cta-buttons {
        flex-direction: column;
        gap: 1rem;
      }

      .button {
        width: 100%;
      }
    }
  `]
})
export class ContactComponent {
  handleEmailClick(event: Event): void {
    // Prevent default only if email client is not available
    const mailtoUrl = 'mailto:akshat.srivastava643@gmail.com';
    const testLink = document.createElement('a');
    testLink.href = mailtoUrl;
    
    if (!testLink.protocol || testLink.protocol === ':') {
      event.preventDefault();
      // Fallback: Copy email to clipboard
      navigator.clipboard.writeText('akshat.srivastava643@gmail.com')
        .then(() => alert('Email address copied to clipboard!'))
        .catch(() => alert('Please email me at: akshat.srivastava643@gmail.com'));
    }
  }
}