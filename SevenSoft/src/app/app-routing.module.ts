import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'user',
    component: UserListComponent
  },
  {
    path: 'user/add',
    component: UserFormComponent
  },
  {
    path: 'user/edit/:id',
    component: UserEditComponent
  },
  {
    path: 'chart',
    component: GraficoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
