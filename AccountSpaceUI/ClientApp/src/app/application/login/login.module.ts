import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';
import { LoginComponent } from './login.component';
import { AppMaterialModule } from 'src/app/app-material.module';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    RouterModule.forChild(LoginRoutes),
    CommonModule,
    AppMaterialModule,
    FormsModule 
  ]
})
export class LoginModule { }
