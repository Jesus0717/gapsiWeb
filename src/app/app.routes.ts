import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProvidersComponent } from './views/providers/providers.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'providers', component: ProvidersComponent },
];
