import {Route} from '@angular/router'
import { ApplicationComponent } from './application.component';

export const ApplicationRoutes: Route[] = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../application/start/start.module').then(m => m.StartModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../application/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'register',
        loadChildren: () => import('../application/register/register.module').then(m => m.RegisterModule)
      },
      {
        path: 'forgot',
        loadChildren: () => import('../application/forgot/forgot.module').then(m => m.ForgotModule)
      }


  ]
  }
];
