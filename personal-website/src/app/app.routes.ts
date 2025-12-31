import { Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { EducationComponent } from './core/education/education.component';
import { ExperienceComponent } from './core/experience/experience.component';
import { ContactComponent } from './core/contact/contact.component';
import { DocsComponent } from './core/docs/docs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'docs', component: DocsComponent },
  { path: '**', redirectTo: '' }
];
