import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { GuideComponent } from './components/guide/guide.component';
import { SHARED_MODULES } from './guide.common';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [GuideComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GuideModule {

    constructor( @Optional() @SkipSelf() parentModule: GuideModule) {
        if (parentModule) {
            throw new Error('GuideModule already loaded; Import in root module only.');
        }
    }
}
