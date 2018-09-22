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
        loadChildren: '../+about/about.module#AboutModule'
        // loadChildren: './app/+about/about.module#AboutModule'
        // TODO: Uncomment below line when building for webpack
        // loadChildren: '../+about/about.module#AboutModule'
    }
];
