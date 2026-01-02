import { Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { EducationComponent } from './core/education/education.component';
import { ExperienceComponent } from './core/experience/experience.component';
import { DocsComponent } from './core/docs/docs.component';
import { AboutComponent } from './core/about/about.component';
import { ProjectsComponent } from './core/projects/projects.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent},
  { path: '**', redirectTo: '' }
];
