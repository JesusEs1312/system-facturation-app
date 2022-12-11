import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListCustomersComponent } from './pages/list-customers/list-customers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "list-customers",
        component: ListCustomersComponent
      },
      {
        path: "**",
        redirectTo: "dashboard"
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule { }
