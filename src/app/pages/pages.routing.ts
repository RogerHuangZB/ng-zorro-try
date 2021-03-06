import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {Pages} from "./pages.component";
import {BaTabBarComponent} from "./components/ba-tab-bar/ba-tab-bar.component";
import {AuthGuard} from "./auth-guard.service";
export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    canActivate: [AuthGuard],
    children: [{
      path: 'tabbar',
      canActivateChild: [AuthGuard],
      children: [
        {path: '', redirectTo: 'tabbar', pathMatch: 'full'},
        {path: 'tabbar', component: BaTabBarComponent},
      ]
    }]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
