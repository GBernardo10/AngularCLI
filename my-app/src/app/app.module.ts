import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstGetComponent } from './gst-get/gst-get.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { TaskComponent } from './task/task.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { CadastroFormComponent } from './cadastro-form/cadastro-form.component';


const appRoutes: Routes = [
  {
    path: 'Task', component: TaskComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    GstAddComponent,
    GstGetComponent,
    GstEditComponent,
    MyNewComponentComponent,
    TaskComponent,
    PageNotFoundComponent,
    UsersComponent,
    LoginComponent,
    CadastroFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
