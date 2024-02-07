import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'team',
    loadComponent: () => import('./team/team.component'),
  },
  {
    path: 'goal',
    loadComponent: () => import('./goal/goal.component'),
  },
  {
    path: 'lighthouse',
    loadComponent: () => import('./lighthouse/lighthouse.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
