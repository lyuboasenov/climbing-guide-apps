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
        loadChildren: 'app/+about/about.module#AboutModule'
    }
];
