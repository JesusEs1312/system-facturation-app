import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { AppModule } from "../app.module";
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
      CommonModule,
      AuthRoutingModule,
      SharedModule,
      MaterialModule
      // AppModule,
      // FormsModule
    ]
})
export class AuthModule { }
