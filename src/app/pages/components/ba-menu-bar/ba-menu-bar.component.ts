import { Component, OnInit } from '@angular/core';
import {BaTabBarComponent} from "../ba-tab-bar/ba-tab-bar.component";

@Component({
  selector: 'ba-menu-bar',
  templateUrl: './ba-menu-bar.component.html',
  styleUrls: ['./ba-menu-bar.component.css']
})
export class BaMenuBarComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit() {
  }

  add(comStr:string){
    console.log(comStr);
    let tab = {
      name: comStr,
      comId: comStr+'Component'
    };
  }

}
