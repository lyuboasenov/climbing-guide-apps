import { Routes } from '@angular/router';
// app
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';

export const UserRoutes: Routes = [
   {
      path: 'login',
      component: LoginComponent
   },
   {
      path: 'signup',
      component: SignupComponent
   },
   {
      path: 'user',
      component: UserComponent
   },
   {
      path: 'about',
      loadChildren: 'app/+about/about.module#AboutModule'
   }
];
