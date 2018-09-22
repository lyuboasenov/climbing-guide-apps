// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { MapRoutes } from './map.routes';
import { MapComponent } from './components/map/map.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>MapRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
   MapComponent
];
