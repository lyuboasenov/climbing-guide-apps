import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { UserComponent } from './components/user/user.component';
import { SHARED_MODULES } from './user.common';

@NgModule({
    imports: [
        ...SHARED_MODULES
    ],
    declarations: [UserComponent]
})
export class UserModule {

    constructor( @Optional() @SkipSelf() parentModule: UserModule) {
        if (parentModule) {
            throw new Error('UserModule already loaded; Import in root module only.');
        }
    }
}
