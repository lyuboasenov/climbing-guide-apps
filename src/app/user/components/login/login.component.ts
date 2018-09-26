import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { alert, prompt } from "tns-core-modules/ui/dialogs";

@Component({
    moduleId: module.id,
    selector: 'climbing-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(translate: TranslateService,
      private router: Router,
      private routerExtensions: RouterExtensions) { }

    ngOnInit() {

    }

   onNavigateTap(navRoute: string): void {
      this.routerExtensions.navigate([navRoute], {
         transition: {
            name: 'fade'
         }
      });
   }

   login(): void {
      // TODO
      // log the fuck in
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
