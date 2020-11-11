import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StartComponent } from './start.component';
import { StartRoutes } from './start.routes';


@NgModule({
  declarations: [StartComponent],
  exports: [StartComponent],
  imports: [
    RouterModule.forChild(StartRoutes),
    CommonModule
  ]
})
export class StartModule { }
