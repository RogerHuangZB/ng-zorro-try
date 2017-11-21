import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PagesService} from "../pages.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class Login implements OnInit {

  res :any;
  loginSuccess: number = 0;
  loginMsg: string = "";

  signIn={
    accountNumber:'',
    code:''
  };

  constructor( private router: Router,
               private pagesService: PagesService) { }

  ngOnInit() {
    console.log('login.component Oninit.');
  }

  onSubmit(form: any): void{
    this.pagesService.login(form.accountNumber, form.code)
      .then(() => {
        this.res = this.pagesService.getLoginMsg();
        if(this.res.code === 'ok'){
          this.loginSuccess = 1;
          this.loginMsg = this.res.msg;
          setTimeout(() => {
            let redUrl = this.pagesService.redirectUrl;
            if (!isNullOrUndefined(redUrl)){
              this.router.navigate([redUrl]);
            }
            this.loginSuccess = 0;
            this.router.navigate(['/pages']);
          }, 500);
        }else{
          this.loginSuccess = 2;
          this.loginMsg = "登录失败,账号名密码错误！";
          setTimeout(() => {
            this.loginSuccess = 0;
          }, 1500);
        }

      });
  }

  enterKeyDown(e, fv){
    if(e.keyCode === 13){
      if(fv.accountNumber.length <= 0){
        this.loginSuccess = 2;
        this.loginMsg = "请输入用户名！";
        setTimeout(() => {
          this.loginSuccess = 0;
        }, 1500);
        return;
      }
      if(fv.code.length < 6){
        this.loginSuccess = 2;
        this.loginMsg = "请输入密码（长度不少于6位）！";
        setTimeout(() => {
          this.loginSuccess = 0;
        }, 1500);
        return;
      }

      this.onSubmit(fv);
    }
  }

}
