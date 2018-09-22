import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page } from 'ui/page';
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular';
import { filter } from 'rxjs/operators';
// app
import { MenuItem } from './menu/menu.common';
import * as app from 'application';

declare const require: any;

@Component({
    moduleId: module.id,
    selector: 'climbing-guide-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit, OnInit {
   private _activatedUrl: string;
   private _sideDrawerTransition: DrawerTransitionBase;

   @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

   menuItems: MenuItem[] = [
      {
         title: 'menu.home',
         link: ['/home']
      },
      {
         title: 'menu.guide',
         link: ['/guide']
      },
      {
         title: 'menu.about',
         link: ['/about']
      }
   ];

   constructor(translate: TranslateService,
      private router: Router,
      private routerExtensions: RouterExtensions,
      page: Page) {
      // Hide action bar as a custom one is shown
      page.actionBarHidden = true;

      translate.setTranslation('en', require('../assets/i18n/en.json'));
      translate.setDefaultLang('en');
      translate.use('en');
   }

   ngOnInit(): void {
      this._activatedUrl = '/home';
      this._sideDrawerTransition = new SlideInOnTopTransition();

      this.router.events
         .pipe(filter((event: any) => event instanceof NavigationEnd))
         .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
   }

   ngAfterViewInit() {
      this.drawer = this.drawerComponent.sideDrawer;
   }

   get sideDrawerTransition(): DrawerTransitionBase {
      return this._sideDrawerTransition;
   }

   isComponentSelected(url: string): boolean {
      return this._activatedUrl === url;
   }

   onNavItemTap(navItemRoute: string): void {
      this.routerExtensions.navigate([navItemRoute], {
         transition: {
            name: 'fade'
         }
      });

      this.drawer.closeDrawer();
   }

   onDrawerButtonTap(): void {
      this.drawer.showDrawer();
   }
}
