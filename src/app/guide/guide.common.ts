// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { GuideRoutes } from './guide.routes';
import { GuideComponent } from './components/guide/guide.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>GuideRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
   GuideComponent
];
