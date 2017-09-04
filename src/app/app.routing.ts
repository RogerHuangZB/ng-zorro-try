import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full'},  //表示应用的默认路径，当URL为空时就会访问那里
  { path: '**', redirectTo: 'pages/tabbar'} //当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true});
