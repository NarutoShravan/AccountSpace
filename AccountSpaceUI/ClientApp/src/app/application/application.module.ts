import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApplicationComponent } from './application.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ApplicationComponent],
  exports: [ApplicationComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApplicationModule { }
