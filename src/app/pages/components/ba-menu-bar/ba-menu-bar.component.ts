import { Component, OnInit } from '@angular/core';
import {BaTabBarService} from "../ba-tab-bar/ba-tab-bar.service";
import {comsTitle} from "../../comsMgr";

@Component({
  selector: 'ba-menu-bar',
  templateUrl: './ba-menu-bar.component.html',
  styleUrls: ['./ba-menu-bar.component.css']
})
export class BaMenuBarComponent implements OnInit {
  theme = true;

  constructor(
    private baTabBarService:BaTabBarService
  ) { }

  ngOnInit() {
  }

  addTab(comStr:string){
    let tabName = comsTitle[comStr];
    let tab = {
      name: tabName,
      comId: comStr
    };
    this.baTabBarService.addTab(tab);
  }

}
