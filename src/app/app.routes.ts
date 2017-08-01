import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'customer', loadChildren: 'app/customer/customer.module#CustomerModule' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
