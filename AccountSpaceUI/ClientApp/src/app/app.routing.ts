import { Routes } from '@angular/router';
import { ApplicationRoutes } from './application/application.routes';
import { ItrackerRoutes } from './itracker/itracker.routes';

export const routes: Routes = [...ApplicationRoutes, ...ItrackerRoutes];
