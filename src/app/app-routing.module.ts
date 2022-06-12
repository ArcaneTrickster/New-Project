import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './auth/auth-layout.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

//your app.module.ts must import AppRoutingModule class which is in this file.
//below is a routes variable of type Routes.
//every app.module.ts which has a AppRoutingModule must provide <router-outlet></router-outlet> in its app.component.html.
// and if a component has children routes then it aslo has to provide a <router-outlet></router-outlet> for children routes.
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
      //above route(feature) is a lazy loading example. Make sure first component is not lazy loaded i.e. AdminLayoutComponent.
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
//you make a simple class a module by giving it @NgModule decorator.below decorator imports RouterModule to gain its properties,
// and set a root route to routes variable. exports allow the functionality to provide usage of imported classes to outside uses by the name of AppRoutingModule.
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
