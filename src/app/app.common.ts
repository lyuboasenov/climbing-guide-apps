import { AppRoutingModule } from './app-routing.module';
// demo
import { AboutModule } from './+about/about.module';
import { GuideModule } from './guide/guide.module';
import { HomeModule } from './home/home.module';
import { MapModule } from './map/map.module';
import { SearchModule } from './search/search.module';
import { SettingsModule } from './settings/settings.module';
import { MenuModule } from './menu/menu.module';
import { UserModule } from './user/user.module';

export const SHARED_MODULES: any[] = [
    AppRoutingModule,
    AboutModule,
    GuideModule,
    HomeModule,
    MapModule,
    MenuModule,
    SearchModule,
    SettingsModule,
    UserModule
];

export * from './app-routing.module';
