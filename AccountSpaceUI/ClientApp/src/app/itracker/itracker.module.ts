import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItrackerComponent } from './itracker.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [CommonModule, RouterModule, ComponentsModule],
  declarations: [ItrackerComponent],
  exports: [ItrackerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItrackerModule { }
