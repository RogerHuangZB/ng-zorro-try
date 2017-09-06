import {
  Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ViewChildren,
  QueryList
} from '@angular/core';
import {coms} from "../../comsMgr";
import {BaTabBarService} from "./ba-tab-bar.service";
import {TabModel} from "./Tab.model";

@Component({
  selector: 'ba-tab-bar',
  templateUrl: './ba-tab-bar.component.html',
  styleUrls: ['./ba-tab-bar.component.css']
})
export class BaTabBarComponent implements OnInit {

  @ViewChildren('nzTabBody',{read:ViewContainerRef}) nzTabBody: QueryList<ViewContainerRef>;

  tabs: TabModel[] = [];

  homeTab:TabModel = {
    name: 'Test',
    comId: 'TestComponent'
  };

  test1:TabModel = {
    name: 'Test1',
    comId: 'Test1Component'
  };

  test2:TabModel = {
    name: 'Test2',
    comId: 'Test2Component'
  };

  constructor(
    private componentFactoryResolver:ComponentFactoryResolver,
    private baTabBarService:BaTabBarService
  ) {
    this.tabs = this.baTabBarService.tabs;
  }

  ngOnInit(){
    console.log("BaTabBarComponent Oninit");
    this.baTabBarService.initHomeTab(this.homeTab);
  }

  addTab(tab:TabModel){
    this.baTabBarService.newTabFlag = true;
    this.baTabBarService.newTabObj = tab;
  }

  closeTab(tab){
    this.baTabBarService.closeTab(tab);
  }

  ngAfterViewChecked(){
    console.log("BaTabBarComponent ngAfterViewChecked");
    if (this.baTabBarService.newTabFlag){
      this.addComponent(this.baTabBarService.newTabObj);
      this.baTabBarService.newTabFlag = false;
    }
  }

  addComponent(tab:any){
    let com = this.componentFactoryResolver.resolveComponentFactory(coms[tab.comId]);
    this.nzTabBody.last.createComponent(com);
  }

}
