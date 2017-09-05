import {Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {TestComponent} from "../../test/test.component";
import {Test1Component} from "../../test1/test1.component";
import {Test2Component} from "../../test2/test2.component";

@Component({
  selector: 'ba-tab-bar',
  templateUrl: './ba-tab-bar.component.html',
  styleUrls: ['./ba-tab-bar.component.css']
})
export class BaTabBarComponent implements OnInit {

  tabs = [
    {
      name: 'Tab'
    },
    {
      name: 'Tab 1'
    }
  ];

  closeTab(tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  };

  newTab() {
    this.tabs.push({
      name: 'New Tab'
    });
    this.addContent();
  };

  @ViewChild('componCont',{read:ViewContainerRef}) componCont:ViewContainerRef;

  constructor(
    private componentFactoryResolver:ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  addContent(){
    let content = this.componentFactoryResolver.resolveComponentFactory(TestComponent);
    this.componCont.createComponent(content);
  }

}
