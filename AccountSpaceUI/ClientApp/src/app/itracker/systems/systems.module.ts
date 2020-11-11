import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SystemsComponent } from './systems.component';
import { SystemsRoutes } from './systems.routes';
import { AppMaterialModule } from 'src/app/app-material.module';


@NgModule({
  declarations: [SystemsComponent],
  exports: [SystemsComponent],
  imports: [
    RouterModule.forChild(SystemsRoutes),
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class SystemsModule { }
