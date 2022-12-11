import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeRoutingModule } from './home-routing.module';
import { ListCustomersComponent } from './pages/list-customers/list-customers.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    ListCustomersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    RouterModule
  ]
})
export class HomeModule { }
