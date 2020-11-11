import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ForgotRoutes } from './forgot.routes';
import { ForgotComponent } from './forgot.component';

@NgModule({
declarations: [ForgotComponent],
  exports: [ForgotComponent],
    imports: [
      RouterModule.forChild(ForgotRoutes),
      CommonModule
    ]
})
export class ForgotModule { }
