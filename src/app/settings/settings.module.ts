import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { SettingsComponent } from './components/settings/settings.component';
import { SHARED_MODULES } from './settings.common';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [SettingsComponent]
})
export class SettingsModule {

    constructor( @Optional() @SkipSelf() parentModule: SettingsModule) {
        if (parentModule) {
            throw new Error('SettingsModule already loaded; Import in root module only.');
        }
    }
}
