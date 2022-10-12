import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent 
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    SharedModule,

]
})
export class HomeModule { }
