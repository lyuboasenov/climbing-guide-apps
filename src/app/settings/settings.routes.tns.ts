import { Routes } from '@angular/router';
// app
import { SettingsComponent } from './components/settings/settings.component';

export const SettingsRoutes: Routes = [
    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'about',
        loadChildren: '../+about/about.module#AboutModule'
        // loadChildren: './app/+about/about.module#AboutModule'
        // TODO: Uncomment below line when building for webpack
        // loadChildren: '../+about/about.module#AboutModule'
    }
];
