import {Injectable} from "@angular/core";
import {TabModel} from "./Tab.model";
@Injectable()
export class BaTabBarService {

  public tabs: TabModel[] = [];
  public newTabFlag: boolean = false;
  public newTabObj: TabModel = null;

  public initHomeTab(tab:TabModel){
    this.newTabFlag = true;
    this.newTabObj = tab;
    this.addTab(tab);
  }

  public addTab(tab:TabModel){
    this.newTabFlag = true;
    this.newTabObj = tab;
    this.tabs.push(tab);
  }

  public closeTab(tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  };

  //TODO: 选中新增的tab

  //TODO: 同一个tab不能重复添加，显示该tab

  //TODO: ?没有调用homeTab的ngOnInit()方法

}
