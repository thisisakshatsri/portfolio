import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  standalone: true,
  template: `
    <div class="profile-container">
      <div class="image-wrapper">
        <img 
          src="https://avatars.githubusercontent.com/u/43510521?v=4"
          alt="Akshat Srivastava"
          class="profile-image"
        />
        <div class="image-overlay"></div>
      </div>
      <div class="frame"></div>
    </div>
  `,
  styles: [`
    .profile-container {
      position: relative;
      width: 300px;
      margin: 0 auto;
    }

    .image-wrapper {
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      transform: translateY(0);
      animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .profile-image {
      width: 100%;
      height: auto;
      display: block;
      filter: grayscale(50%);
      transition: all 0.3s ease;
    }

    .image-wrapper:hover .profile-image {
      filter: none;
    }

    .image-overlay {
      position: absolute;
      inset: 0;
      background: var(--green);
      mix-blend-mode: multiply;
      opacity: 0.3;
      transition: opacity 0.3s ease;
    }

    .image-wrapper:hover .image-overlay {
      opacity: 0;
    }

    .frame {
      position: absolute;
      top: 15px;
      left: 15px;
      right: -15px;
      bottom: -15px;
      border: 2px solid var(--green);
      border-radius: 8px;
      z-index: -1;
      transition: transform 0.3s ease;
    }

    .profile-container:hover .frame {
      transform: translate(-5px, -5px);
    }
  `]
})
export class ProfileImageComponent {}