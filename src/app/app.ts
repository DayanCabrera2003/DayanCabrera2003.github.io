import { Component } from '@angular/core';
import { SiteHeaderComponent } from './core/components/site-header/site-header';
import { IntroComponent } from './sections/intro/intro';
import { WorkComponent } from './sections/work/work';
import { PrinciplesComponent } from './sections/principles/principles';
import { ExperienceComponent } from './sections/experience/experience';
import { ContactComponent } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SiteHeaderComponent,
    IntroComponent,
    WorkComponent,
    PrinciplesComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class AppComponent {}
