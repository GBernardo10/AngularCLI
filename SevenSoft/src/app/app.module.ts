import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsDashboardModule } from './components/dashboard/components-dashboard/components-dashboard.module';
import { AppComponent } from './app.component';


// import { AuthGuard } from './authentication/auth.guard';


// import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ConteudoComponent } from './components/conteudo/conteudo.component';
// import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UsersService } from './services/users.service';
import { GraficoService } from './services/grafico.service';
import { ParallaxDirective } from './parallax.directive';
import { ParallaxComponent } from './components/parallax/parallax.component';
import { ComponentsGraficoModule } from './components/grafico/components-grafico';
// import { GraficoComponent } from './components/grafico/grafico.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { LoginComponent } from './components/login/login.component';
import { AdmComponent } from './dashboard/adm/adm.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ConteudoComponent,
    NavigationComponent,
    UserFormComponent,
    UserListComponent,
    ParallaxDirective,
    ParallaxComponent,
    UserEditComponent,
    LoginComponent,
    AdmComponent,
    // DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsDashboardModule,
    ComponentsGraficoModule
  ],
  providers: [
    UsersService,
    GraficoService,
    // AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
