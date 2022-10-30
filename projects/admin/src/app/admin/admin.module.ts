import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const ADMIN_ROUTES: Route[] = [
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ADMIN_ROUTES)],
  declarations: [AdminComponent],
})
export class AdminModule {}
