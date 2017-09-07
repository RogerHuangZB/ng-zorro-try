import {Injectable, EventEmitter} from "@angular/core";
import {TabModel} from "./Tab.model";

@Injectable()
export class BaTabBarService {

  public tabs: TabModel[] = [];
  public newTabFlag: boolean = false;
  public newTabObj: TabModel = null;
  public select: EventEmitter<any> = new EventEmitter();

  public addTab(tab:TabModel){
    let tabName = tab.name;
    // console.log(tab.name);
    // console.log(this.tabs);
    let isTabExistFlag = this.isTabExist(tabName);
    if(isTabExistFlag<0){
      this.newTabFlag = true;
      this.newTabObj = tab;
      this.tabs.push(tab);
    }else {
      this.select.emit(isTabExistFlag);
    }
  }

  public closeTab(tab) {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
  };

  isTabExist(tabName:string):number{
    for(let i=0;i<this.tabs.length;i++){
      if(tabName === this.tabs[i].name){
        return i;
      }
    }
    return -1;
  }


}
