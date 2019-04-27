import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

//import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule} from '@angular/common/http';
import { NbThemeModule } from '@nebular/theme';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';


import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { TaskComponent } from './task/task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


/*
const appRoutes: Routes = [
  {
    path: 'Task', component: TaskComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent,
    TaskComponent,
    PageNotFoundComponent,
    UsersComponent,
    LoginComponent,
    CadastroFormComponent,
    AdminLayoutComponent,
    //DashboardComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserModule,
    //RouterModule.forRoot(appRoutes),
    NbThemeModule.forRoot(),
  HttpClientModule,
  AgmCoreModule.forRoot({
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
