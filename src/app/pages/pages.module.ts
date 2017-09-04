import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Pages} from "./pages.component";
import {routing} from "./pages.routing";
import { Login } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
  ],
  declarations: [
    Pages,
    Login
  ],
  providers: [ ]
})

export class PagesModule {

}
