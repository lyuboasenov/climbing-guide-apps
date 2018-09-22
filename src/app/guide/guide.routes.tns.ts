import { Routes } from '@angular/router';
// app
import { GuideComponent } from './components/guide/guide.component';

export const GuideRoutes: Routes = [
    {
        path: 'guide',
        component: GuideComponent
    },
    {
        path: 'about',
        loadChildren: '../+about/about.module#AboutModule'
        // loadChildren: './app/+about/about.module#AboutModule'
        // TODO: Uncomment below line when building for webpack
        // loadChildren: '../+about/about.module#AboutModule'
    }
];
