import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PerfilDashboardComponent } from './perfil-dashboard/perfil-dashboard.component';
import { EventoDashboardComponent } from './evento-dashboard/evento-dashboard.component';
import { ChamadosDashboardComponent } from './chamados-dashboard/chamados-dashboard.component';
import { GuardService } from 'src/app/Site/services/guard.service';
import { VisualizarEventoComponent } from './visualizar-evento/visualizar-evento.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent, canActivate: [GuardService] },
  { path: 'dashboard/:id', component: UserDashboardComponent, canActivate: [GuardService] },
  { path: 'perfil/:id', component: PerfilDashboardComponent, canActivate: [GuardService] },
  { path: 'evento/:id', component: EventoDashboardComponent, canActivate: [GuardService] },
  { path: 'evento/:id/cadastro-maquina', component: PerfilDashboardComponent },
  { path: 'abrir-chamado/:id', component: ChamadosDashboardComponent, canActivate: [GuardService] },
  { path: 'evento/:id/visualizar-evento/:id', component: VisualizarEventoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
