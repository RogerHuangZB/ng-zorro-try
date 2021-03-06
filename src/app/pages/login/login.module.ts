///<reference path="../../../../node_modules/@angular/common/src/common_module.d.ts"/>
import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {routing} from "./login.routing";
import {Login} from "./login.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    Login
  ]
})
export class LoginModule {}
