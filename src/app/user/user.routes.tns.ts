import { Routes } from '@angular/router';
// app
import { UserComponent } from './components/user/user.component';

export const UserRoutes: Routes = [
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'about',
        loadChildren: '../+about/about.module#AboutModule'
        // loadChildren: './app/+about/about.module#AboutModule'
        // TODO: Uncomment below line when building for webpack
        // loadChildren: '../+about/about.module#AboutModule'
    }
];
