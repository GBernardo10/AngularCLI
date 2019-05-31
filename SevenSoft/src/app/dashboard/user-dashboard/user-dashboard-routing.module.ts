import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PerfilDashboardComponent } from './perfil-dashboard/perfil-dashboard.component';
import { EventoDashboardComponent } from './evento-dashboard/evento-dashboard.component';
import { ChamadosDashboardComponent } from './chamados-dashboard/chamados-dashboard.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'perfil', component: PerfilDashboardComponent },
  { path: 'evento', component: EventoDashboardComponent },
  { path: 'abrir-chamado', component: ChamadosDashboardComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
