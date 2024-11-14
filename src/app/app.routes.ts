// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CloudComponent } from './cloud/cloud.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { CasestudyDetailsComponent } from './casestudy-details/casestudy-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'casestudydetails', component: CasestudyDetailsComponent },
  { path: 'casestudies', component: CaseStudiesComponent } 

];
