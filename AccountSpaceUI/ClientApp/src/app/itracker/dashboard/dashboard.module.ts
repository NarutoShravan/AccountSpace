import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [
    RouterModule.forChild(DashboardRoutes),
    CommonModule
  ]
})
export class DashboardModule { }
