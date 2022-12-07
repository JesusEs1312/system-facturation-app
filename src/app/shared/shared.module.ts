import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ToolbarComponent,
    ErrorPageComponent
  ],
  exports: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
