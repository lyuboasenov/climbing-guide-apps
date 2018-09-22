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
        loadChildren: 'app/+about/about.module#AboutModule'
    }
];
