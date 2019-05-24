import { Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
// import {  } from '../../components/dashboard/';


export const AdmRouting: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user-profile', component: DashboardComponent
  },
  {
    path: 'user-evento', component: DashboardComponent
  },
  {
    path: 'user-ticket', component: DashboardComponent
  },
];
