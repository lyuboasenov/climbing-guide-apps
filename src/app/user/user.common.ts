// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { UserRoutes } from './user.routes';
import { UserComponent } from './components/user/user.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>UserRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
   UserComponent
];
