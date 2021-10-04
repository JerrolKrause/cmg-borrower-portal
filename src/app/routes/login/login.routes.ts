import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Please Log in' },
  },
];

export const routing: ModuleWithProviders<LoginModule> = RouterModule.forChild(routes);
