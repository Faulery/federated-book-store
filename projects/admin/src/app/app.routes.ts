import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
