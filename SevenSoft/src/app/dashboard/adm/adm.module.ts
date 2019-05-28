import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdmRouting } from './adm.routing';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TableListComponent } from '../../components/table-list/table-list.component';
// import { NavBarComponent } from '../../components/dashboard/nav-bar/nav-bar.component';
// import { SideBarComponent } from '../../components/dashboard/side-bar/side-bar.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdmRouting),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class AdmModule { }
