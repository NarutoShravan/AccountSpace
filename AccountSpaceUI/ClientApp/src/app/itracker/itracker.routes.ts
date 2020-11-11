import { Route } from '@angular/router';
import { ItrackerComponent } from './itracker.component';
import { AuthGuard } from '../auth/auth.guard';

export const ItrackerRoutes: Route[] = [
  {
    path: '',
    component: ItrackerComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'itracker/dashboard',
        loadChildren: () => import('../itracker/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'itracker/admin',
        loadChildren: () => import('../itracker/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'itracker/users',
        loadChildren: () => import('../itracker/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'itracker/systems',
        loadChildren: () => import('../itracker/systems/systems.module').then(m => m.SystemsModule)
      },
      {
        path: 'itracker/sub-systems',
        loadChildren: () => import('../itracker/sub-systems/sub-systems.module').then(m => m.SubSystemsModule)
      },
      {
        path: 'itracker/projects',
        loadChildren: () => import('../itracker/projects/projects.module').then(m => m.ProjectsModule)
      }
  ]
  }
];
