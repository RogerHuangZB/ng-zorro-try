import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {routing} from "./tabbar.routing";
import {Tabbar} from "./tabbar.component";
import { UserManage } from './components/user-manage/user-manage.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    Tabbar,
    UserManage
  ],
  providers: [ ]
})

export class TabbarModule {

}
