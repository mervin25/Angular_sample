import { Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/register',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: RegisterFormComponent,
  },
  {
    path: '**',
    redirectTo: '/register',
    pathMatch: 'full',
  },
];
