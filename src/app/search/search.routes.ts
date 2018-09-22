import { Routes } from '@angular/router';
// app
import { SearchComponent } from './components/search/search.component';

export const SearchRoutes: Routes = [
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'about',
        loadChildren: 'app/+about/about.module#AboutModule'
    }
];
