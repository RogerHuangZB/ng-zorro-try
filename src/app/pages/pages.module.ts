import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {Pages} from "./pages.component";
import {routing} from "./pages.routing";
import { Login } from './login/login.component';
import { BaPageTopComponent } from './components/ba-page-top/ba-page-top.component';
import { BaMenuBarComponent } from './components/ba-menu-bar/ba-menu-bar.component';
import { BaTabBarComponent } from './components/ba-tab-bar/ba-tab-bar.component';
import {NgZorroAntdModule} from "ng-zorro-antd/src/release/ng-zorro-antd.module";
import {importComs} from "./comsMgr";
import {BaTabBarService} from "./components/ba-tab-bar/ba-tab-bar.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing,
    NgZorroAntdModule
  ],
  entryComponents: [
    ...importComs
  ],
  declarations: [
    Pages,
    Login,
    BaPageTopComponent,
    BaMenuBarComponent,
    BaTabBarComponent,
    ...importComs
  ],
  providers: [
    BaTabBarService
  ]
})

export class PagesModule {

}
