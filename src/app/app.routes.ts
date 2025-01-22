import { Routes } from '@angular/router';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

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
    path: 'confirmation',
    component: ConfirmationComponent,
  },
  {
    path: '**',
    redirectTo: '/register',
    pathMatch: 'full',
  },
];
