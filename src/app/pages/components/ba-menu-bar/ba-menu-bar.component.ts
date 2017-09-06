import { Component, OnInit } from '@angular/core';
import {BaTabBarService} from "../ba-tab-bar/ba-tab-bar.service";

@Component({
  selector: 'ba-menu-bar',
  templateUrl: './ba-menu-bar.component.html',
  styleUrls: ['./ba-menu-bar.component.css']
})
export class BaMenuBarComponent implements OnInit {

  constructor(
    private baTabBarService:BaTabBarService
  ) { }

  ngOnInit() {
  }

  addTab(comStr:string){
    let tab = {
      name: comStr,
      comId: comStr+'Component'
    };
    this.baTabBarService.addTab(tab);
  }

}
