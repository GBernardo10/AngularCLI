import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GstAddComponent } from './gst-add/gst-add.component';
import { GstEditComponent } from './gst-edit/gst-edit.component';
import { GstGetComponent } from './gst-get/gst-get.component';

const routes: Routes = [
  {
    path: 'usuarios/adicionar',
    component: GstAddComponent
  },
  {
    path: 'usuarios/editar/:id',
    component: GstEditComponent
  },
  {
    path: 'usuarios',
    component: GstGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
