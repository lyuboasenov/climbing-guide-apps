import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
    moduleId: module.id,
    selector: 'climbing-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    constructor(translate: TranslateService,
      private router: Router,
      private routerExtensions: RouterExtensions) { }

   ngOnInit() {

   }

   signup(email: string, password: string, confirmPassword: string) {
      
   }

   onNavigateTap(navRoute: string): void {
      this.routerExtensions.navigate([navRoute], {
         transition: {
            name: 'fade'
         }
      });
   }

}
