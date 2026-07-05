import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../home/home').then((m) => m.Home),
  },
  {
    path: 'projects',
    loadComponent: () => import('../projects/projects').then((m) => m.Projects),
  },
  { path: '**', redirectTo: '' },
];
