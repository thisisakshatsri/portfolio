import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navigation/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NowComponent } from './components/now/now.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    NowComponent, 
    ContactComponent
  ],
  template: `
    <app-navbar />
    <div class="container">
      <app-hero />
      <app-about />
      <app-experience />
      <app-projects />
      <app-now />
      <app-contact />
    </div>
  `
})
export class AppComponent {}