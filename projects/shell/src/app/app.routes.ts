import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('admin/Module').then((m) => m.AdminModule),
  },
];
