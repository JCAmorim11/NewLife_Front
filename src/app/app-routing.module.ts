import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/components/login/login.component';
import { FooterComponent } from './shared/components/footer/footer.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { NavegationComponent } from './shared/components/navegation/navegation.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SearchModule } from './search/search.module';

const routes: Routes = [

  { path: '', component: NavegationComponent, 
  children: [
    { path: '', loadChildren: () => import("./login/login.module").then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import ("./register/register.module").then(m => m.RegisterModule)},
    { path: 'search', loadChildren: () => import ("./search/search.module").then(m => m.SearchModule)},
    { path: 'home', loadChildren: () => import("./home/home.module").then(m => m.HomeModule)},
    { path: 'report', loadChildren: () => import("./reports/reports.module").then(m => m.ReportsModule)},
  ]
  },
  { path:'', component: FooterComponent,
  children: [
    { path: '', component: LoginModule },
    { path: 'register', component: RegisterModule},
    { path: 'search', component: SearchModule} ]},

  { path: '**', component: PageNotFoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
