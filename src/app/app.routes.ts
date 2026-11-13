import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { lang: 'en' } },
  { path: 'es', component: HomeComponent, data: { lang: 'es' } },
  { path: '**', redirectTo: '' },
];
