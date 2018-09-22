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
        loadChildren: 'app/+about/about.module#AboutModule'
    }
];
