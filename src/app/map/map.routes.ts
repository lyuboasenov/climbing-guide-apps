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
        loadChildren: 'app/+about/about.module#AboutModule'
    }
];
