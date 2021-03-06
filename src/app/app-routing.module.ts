import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth/auth-layout.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    //canActivate: [AuthGuard], ---these 2 commented lines are suppose to redirect to login page if user login not in the app.
    //canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: { title: 'Dashboard', titleI18n: 'dashboard' },
      },
      {
        path: 'features',
        loadChildren: () =>
          import('./pages/features/features.module').then(
            (m) => m.FeaturesModule
          ),
        data: { title: 'features', titleI18n: 'design' },
      },
      //a lazy loading example. Make sure first component is not lazy loaded.
    ],
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
        data: { title: 'Login', titleI18n: 'login' },
      },
      {
        path: 'register',
        component: RegistrationComponent,
        data: { title: 'Register', titleI18n: 'register' },
      },
    ],
  },
  {
    path: '**',
    component: PagenotfoundComponent,
    data: { title: 'notfound', titleI18n: 'notfound' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
