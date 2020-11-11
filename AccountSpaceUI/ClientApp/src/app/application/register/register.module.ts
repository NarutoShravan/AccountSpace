import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterRoutes } from './register.routes';
import { RegisterComponent } from './register.component';
import { AppMaterialModule } from 'src/app/app-material.module';


@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [
    RouterModule.forChild(RegisterRoutes),
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class RegisterModule { }
