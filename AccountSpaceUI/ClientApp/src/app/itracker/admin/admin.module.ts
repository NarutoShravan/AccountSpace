import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { AppMaterialModule } from 'src/app/app-material.module';


@NgModule({
  declarations: [AdminComponent],
  exports: [AdminComponent],
  imports: [
    RouterModule.forChild(AdminRoutes),
    CommonModule,
    AppMaterialModule
  ]
})
export class AdminModule { }
