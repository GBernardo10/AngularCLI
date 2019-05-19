import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './authentication/auth.guard';


import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersService } from './services/users.service';
import { GraficoService } from './services/grafico.service';
import { ParallaxDirective } from './parallax.directive';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { GraficoComponent } from './components/grafico/grafico.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './dashboard/adm/adm.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { RoutaDashboardComponent } from './adm/routa-dashboard/routa-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ConteudoComponent,
    FooterComponent,
    NavigationComponent,
    UserFormComponent,
    UserListComponent,
    ParallaxDirective,
    ParallaxComponent,
    GraficoComponent,
    UserEditComponent,
    LoginComponent,
    AdmComponent,
    DashboardComponent
    // RoutaDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UsersService,
    GraficoService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
