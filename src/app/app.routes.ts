import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'simple',
    loadComponent: () =>
      import('./first-graph/first-graph.component').then(
        (m) => m.FirstGraphComponent
      ),
  },
  {
    path: 'arrow',
    loadComponent: () =>
      import('./arrow/arrow.component').then((m) => m.ArrowComponent),
  },
  {
    path: 'ford/min',
    loadComponent: () =>
      import('./ford-min/ford-min.component').then((m) => m.FordMinComponent),
  },
];
