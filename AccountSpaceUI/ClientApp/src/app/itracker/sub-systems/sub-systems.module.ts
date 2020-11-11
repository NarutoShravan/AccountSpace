import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubSystemsComponent } from './sub-systems.component';
import { SubSystemsRoutes } from './sub-systems.routes';
import { AppMaterialModule } from 'src/app/app-material.module';


@NgModule({
  declarations: [SubSystemsComponent],
  exports: [SubSystemsComponent],
  imports: [
    RouterModule.forChild(SubSystemsRoutes),
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class SubSystemsModule { }
