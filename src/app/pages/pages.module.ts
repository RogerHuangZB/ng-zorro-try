import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Pages} from "./pages.component";
import {routing} from "./pages.routing";
import { Login } from './login/login.component';
import { BaPageTopComponent } from './components/ba-page-top/ba-page-top.component';
import { BaMenuBarComponent } from './components/ba-menu-bar/ba-menu-bar.component';
import { BaTabBarComponent } from './components/ba-tab-bar/ba-tab-bar.component';
import {importComs} from "./comsMgr";
import {BaTabBarService} from "./components/ba-tab-bar/ba-tab-bar.service";
import {NgZorroAntdModule} from "ng-zorro-antd";
import { JcManageComponent } from './ddjc/jc-manage/jc-manage.component';
import { JcBrandManageComponent } from './ddjc/jc-brand-manage/jc-brand-manage.component';
import { JcTypeManageComponent } from './ddjc/jc-type-manage/jc-type-manage.component';
import {JcTypeManageService} from "./ddjc/jc-type-manage/jc-type-manage.service";
import {PagesService} from "./pages.service";
import {JcBrandManageService} from "./ddjc/jc-brand-manage/jc-brand-manage.service";
import {JcManageService} from "./ddjc/jc-manage/jc-manage.service";
import {FileUploadModule} from "ng2-file-upload";
import {ImageUploadModule} from "angular2-image-upload";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    NgZorroAntdModule,
    FileUploadModule,
    ImageUploadModule.forRoot(),
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
    ...importComs,
    JcManageComponent,
    JcBrandManageComponent,
    JcTypeManageComponent,
  ],
  providers: [
    PagesService,
    BaTabBarService,
    JcManageService,
    JcTypeManageService,
    JcBrandManageService
  ]
})

export class PagesModule {

}
