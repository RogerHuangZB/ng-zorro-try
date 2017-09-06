import {
  Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ViewChildren,
  QueryList
} from '@angular/core';
import {coms} from "../../comsMgr";

@Component({
  selector: 'ba-tab-bar',
  templateUrl: './ba-tab-bar.component.html',
  styleUrls: ['./ba-tab-bar.component.css']
})
export class BaTabBarComponent implements OnInit {

  tabs = [];

  homeTab = {
    name: 'Test',
    comId: 'TestComponent'
  };

  closeTab(tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  };

  newTabFlag:boolean = false;
  newTabObj: any = null;

  initHomeTab(tab:any){
    this.newTabFlag = true;
    this.newTabObj = tab;
    this.tabs.push(tab);
  }

  // public add(tab:any) {
  //   this.newTabFlag = true;
  //   this.newTabObj = tab;
  //   this.tabs.push(tab);
  // };

  test1 = {
    name: 'Test1',
    comId: 'Test1Component'
  };

  test2 = {
    name: 'Test2',
    comId: 'Test2Component'
  };

  public addTab(tab:any) {
    console.log(tab);
    this.newTabFlag = true;
    this.newTabObj = tab;
    this.tabs.push(tab);
  };

  @ViewChildren('nzTabBody',{read:ViewContainerRef}) nzTabBody: QueryList<ViewContainerRef>;

  constructor(
    private componentFactoryResolver:ComponentFactoryResolver
  ) { }

  ngOnInit(){
    console.log("BaTabBarComponent");
    this.initHomeTab(this.homeTab);
  }

  ngAfterViewChecked(){
    // console.log("ngAfterViewChecked");
    // console.log(this.nzTabBody.last);
    if (this.newTabFlag){
      this.addComponent(this.newTabObj);
      this.newTabFlag = false;
    }
  }

  addComponent(tab:any){
    let com = this.componentFactoryResolver.resolveComponentFactory(coms[tab.comId]);
    this.nzTabBody.last.createComponent(com);
  }

}
