/*
  tab的配置文件
  所有单独显示在tab页上的Components都要在这里注册
  用组件名来获取组件
*/

import {TestComponent} from "./test/test.component";
import {Test2Component} from "./test2/test2.component";
import {Test1Component} from "./test1/test1.component";

let coms = {
  TestComponent,
  Test1Component,
  Test2Component,
};

const importComs = [
  TestComponent,
  Test1Component,
  Test2Component,
];

export { coms, importComs }
