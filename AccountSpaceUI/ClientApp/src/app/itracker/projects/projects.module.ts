import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutes } from './projects.routes';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [ProjectsComponent],
  exports: [ProjectsComponent],
  imports: [
    RouterModule.forChild(ProjectsRoutes),
    CommonModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class ProjectsModule { }
