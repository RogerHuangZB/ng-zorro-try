/*
  开发模式下本组件增加Tab会报以下ERROR:
  ---------------------------------
    ExpressionChangedAfterItHasBeenCheckedError:
    Expression has changed after it was checked.
    Previous value: '0'. Current value: '1'.
  ---------------------------------
  并不影响
  这个错误只会在dev开发模式下出现，在pro发布版本中不会出现，通过enableProdMode()可以控制
  在dev模式下，额外增加了一次变化检测，在第一轮变化检测周期结束后，
  会立即进行第二轮变化检测，对比两次检测值，如果不相同，则认为是变化检测引起的。
*/

import {
  Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ViewChildren,
  QueryList, enableProdMode
} from '@angular/core';
import {coms} from "../../comsMgr";
import {BaTabBarService} from "./ba-tab-bar.service";
import {TabModel} from "./Tab.model";
enableProdMode();

@Component({
  selector: 'ba-tab-bar',
  templateUrl: './ba-tab-bar.component.html',
  styleUrls: ['./ba-tab-bar.component.css']
})
export class BaTabBarComponent implements OnInit {

  @ViewChildren('nzTabBody',{read:ViewContainerRef}) nzTabBody: QueryList<ViewContainerRef>;

  tabs: TabModel[] = [];
  selectedIndex: number = 0;

  homeTab:TabModel = {
    name: '测试',
    comId: 'TestComponent'
  };

  constructor(
    private componentFactoryResolver:ComponentFactoryResolver,
    private baTabBarService:BaTabBarService
  ) {
    this.tabs = this.baTabBarService.tabs;
    this.baTabBarService.select.subscribe(
      mission => {
        console.log(mission);
        this.selectedIndex = mission;
      });
  }

  ngOnInit(){
    console.log("BaTabBarComponent Oninit");
    this.baTabBarService.addTab(this.homeTab);
    //TODO: ?没有调用homeTab的ngOnInit()方法
  }

  closeTab(tab){
    this.baTabBarService.closeTab(tab);
  }

  ngAfterViewChecked(){
    console.log("BaTabBarComponent ngAfterViewChecked");
    if (this.baTabBarService.newTabFlag){
      this.selectedIndex = this.tabs.indexOf(this.baTabBarService.newTabObj);
      this.addComponent(this.baTabBarService.newTabObj);
      this.baTabBarService.newTabFlag = false;
    }
  }

  addComponent(tab:any){
    let com = this.componentFactoryResolver.resolveComponentFactory(coms[tab.comId]);
    this.nzTabBody.last.createComponent(com);
  }

}
