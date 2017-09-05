import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Pages} from "./pages.component";
import {routing} from "./pages.routing";
import { Login } from './login/login.component';
import { BaPageTopComponent } from './components/ba-page-top/ba-page-top.component';
import { BaMenuBarComponent } from './components/ba-menu-bar/ba-menu-bar.component';
import { BaTabBarComponent } from './components/ba-tab-bar/ba-tab-bar.component';
import {NgZorroAntdModule} from "ng-zorro-antd/src/release/ng-zorro-antd.module";
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgZorroAntdModule
  ],
  entryComponents: [
    TestComponent,
    Test1Component,
    Test2Component
  ],
  declarations: [
    Pages,
    Login,
    BaPageTopComponent,
    BaMenuBarComponent,
    BaTabBarComponent,
    TestComponent,
    Test1Component,
    Test2Component
  ],
  providers: [ ]
})

export class PagesModule {

}
