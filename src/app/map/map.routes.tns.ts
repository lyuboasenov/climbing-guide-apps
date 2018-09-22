import { Routes } from '@angular/router';
// app
import { MapComponent } from './components/map/map.component';

export const MapRoutes: Routes = [
    {
        path: 'map',
        component: MapComponent
    },
    {
        path: 'about',
        loadChildren: '../+about/about.module#AboutModule'
        // loadChildren: './app/+about/about.module#AboutModule'
        // TODO: Uncomment below line when building for webpack
        // loadChildren: '../+about/about.module#AboutModule'
    }
];
