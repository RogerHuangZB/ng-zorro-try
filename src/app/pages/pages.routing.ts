import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {Pages} from "./pages.component";
export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [{
      path: '',
      children: [
        {path: '', redirectTo: 'tabbar', pathMatch: 'full'},
        {path: 'tabbar', loadChildren: './tabbar/tabbar.module#TabbarModule'},
      ]
    }]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
