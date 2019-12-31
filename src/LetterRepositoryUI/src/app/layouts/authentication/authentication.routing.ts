import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../login/login.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    }/*,
    {
      path: 'auth',
      children: [ {
        path: 'login',
        component: LoginComponent
    }]}*/
];

export const AuthenticationRoutes: ModuleWithProviders = RouterModule.forChild(routes);
