import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { SearchComponent } from './components/search/search.component';
import { SHARED_MODULES } from './search.common';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [SearchComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule {

    constructor( @Optional() @SkipSelf() parentModule: SearchModule) {
        if (parentModule) {
            throw new Error('SearchModule already loaded; Import in root module only.');
        }
    }
}
