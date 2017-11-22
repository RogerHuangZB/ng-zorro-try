import { Component, OnInit } from '@angular/core';
import {User} from "../../sysManage/model/user_row";
import {Router} from "@angular/router";
import {PagesService} from "../../pages.service";

@Component({
  selector: 'ba-page-top',
  templateUrl: './ba-page-top.component.html',
  styleUrls: ['./ba-page-top.component.css']
})
export class BaPageTopComponent implements OnInit {

  loginUser: User;

  constructor(private _router:Router,
              private pagesService:PagesService) {
    this.loginUser = new User(0,'','','',0,0,0,'','','',0,'',null);
    this.loginUser.deptName = sessionStorage.getItem('_userDeptName');
    this.loginUser.name = sessionStorage.getItem('_userName');
  }

  ngOnInit() {
  }

  logout(){
    sessionStorage.clear();
    this.pagesService.deleteAuth();
    this._router.navigate(['/login']);
  }
}
