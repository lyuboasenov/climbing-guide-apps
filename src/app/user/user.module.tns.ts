import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
// app
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { SHARED_MODULES } from './user.common';

@NgModule({
   imports: [
      ...SHARED_MODULES
   ],
   declarations: [
      LoginComponent,
      SignupComponent,
      UserComponent
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ]
})
export class UserModule {

    constructor( @Optional() @SkipSelf() parentModule: UserModule) {
        if (parentModule) {
            throw new Error('UserModule already loaded; Import in root module only.');
        }
    }
}
