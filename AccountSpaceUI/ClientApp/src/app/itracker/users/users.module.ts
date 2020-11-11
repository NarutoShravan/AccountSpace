import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routes';
import { AppMaterialModule } from 'src/app/app-material.module';


@NgModule({
  declarations: [UsersComponent],
  exports: [UsersComponent],
  imports: [
    RouterModule.forChild(UsersRoutes),
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class UsersModule { }
