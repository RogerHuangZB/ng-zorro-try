/*
  tab的配置文件
  所有单独显示在tab页上的Components都要在这里注册
  用组件名来获取组件
*/

import {TestComponent} from "./test/test.component";
import {Test2Component} from "./test2/test2.component";
import {Test1Component} from "./test1/test1.component";
import {UserManageComponent} from "./sysManage/user-manage/user-manage.component";
import {JcTypeManageComponent} from "./ddjc/jc-type-manage/jc-type-manage.component";
import {JcManageComponent} from "./ddjc/jc-manage/jc-manage.component";
import {JcBrandManageComponent} from "./ddjc/jc-brand-manage/jc-brand-manage.component";

let coms = {
  TestComponent,
  Test1Component,
  Test2Component,
  UserManageComponent,
  JcManageComponent,
  JcBrandManageComponent,
  JcTypeManageComponent
};

let comsTitle = {
  'TestComponent': '测试',
  'Test1Component': '测试1',
  'Test2Component': '测试2',
  'UserManageComponent': '用户管理',
  'JcManageComponent': '机床管理',
  'JcBrandManageComponent': '机床品牌',
  'JcTypeManageComponent': '机床类型',
};

const importComs = [
  TestComponent,
  Test1Component,
  Test2Component,
  UserManageComponent,
  JcManageComponent,
  JcBrandManageComponent,
  JcTypeManageComponent
];

export { coms, comsTitle, importComs }
