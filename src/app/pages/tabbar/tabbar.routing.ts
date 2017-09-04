import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {Tabbar} from "./tabbar.component";
import {UserManage} from "./components/user-manage/user-manage.component";
export const routes: Routes = [
  {
    path: '',
    component: Tabbar,
    children: [
      { path: 'userManage', component: UserManage },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
