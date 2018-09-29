import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { alert, prompt } from 'tns-core-modules/ui/dialogs';
import { AuthenticationService } from '../../../service/services/authentication.service'

@Component({
    moduleId: module.id,
    selector: 'climbing-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(translate: TranslateService,
      private router: Router,
      private routerExtensions: RouterExtensions,
      private authenticationService: AuthenticationService) { }

    ngOnInit() {

    }

   onNavigateTap(navRoute: string): void {
      this.routerExtensions.navigate([navRoute], {
         transition: {
            name: 'fade'
         }
      });
   }

   login(email: string, password: string): void {
      // TODO
      // log the fuck in
      prompt({
         title: 'Logging in',
         message: 'Email: ' + email + ' / password: ' + password,
         defaultText: '',
         okButtonText: 'Ok',
         cancelButtonText: 'Cancel'
      });
      // this.authenticationService.login(this.email, this.password);
   }

   forgottenPassword(): void {
      prompt({
         title: 'Forgot Password',
         message: 'Enter the email address you used to register for APP NAME to reset your password.',
         defaultText: '',
         okButtonText: 'Ok',
         cancelButtonText: 'Cancel'
      }).then((data) => {
         if (data.result) {
            // TODO
            // Call the backend to reset the password
            alert({
               title: 'APP NAME',
               message: 'Your password was successfully reset. Please check your email for instructions on choosing a new password.',
               okButtonText: 'Ok'
            })
         }
      });
   }

}
