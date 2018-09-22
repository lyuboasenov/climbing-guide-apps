// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { SettingsRoutes } from './settings.routes';
import { SettingsComponent } from './components/settings/settings.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>SettingsRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
   SettingsComponent
];
