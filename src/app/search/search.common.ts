// vendor dependencies
import { TranslateModule } from '@ngx-translate/core';
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { SearchRoutes } from './search.routes';
import { SearchComponent } from './components/search/search.component';

export const SHARED_MODULES: any[] = [
    SharedModule,
    RouterModule.forChild(<any>SearchRoutes),
    TranslateModule.forChild(),
];

export const COMPONENT_DECLARATIONS: any[] = [
   SearchComponent
];
