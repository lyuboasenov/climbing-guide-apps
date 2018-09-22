import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { MapComponent } from './components/map/map.component';
import { SHARED_MODULES } from './map.common';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [MapComponent],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class MapModule {

    constructor( @Optional() @SkipSelf() parentModule: MapModule) {
        if (parentModule) {
            throw new Error('MapModule already loaded; Import in root module only.');
        }
    }
}
