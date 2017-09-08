/*
  tab的配置文件
  所有单独显示在tab页上的Components都要在这里注册
  用组件名来获取组件
*/

import {TestComponent} from "./test/test.component";
import {Test2Component} from "./test2/test2.component";
import {Test1Component} from "./test1/test1.component";
import {UserManageComponent} from "./sysManage/user-manage/user-manage.component";

let coms = {
  TestComponent,
  Test1Component,
  Test2Component,
  UserManageComponent
};

let comsTitle = {
  'TestComponent': '测试',
  'Test1Component': '测试1',
  'Test2Component': '测试2',
  'UserManageComponent': '用户管理',
};

const importComs = [
  TestComponent,
  Test1Component,
  Test2Component,
  UserManageComponent
];

export { coms, comsTitle, importComs }
