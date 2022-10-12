import { SharedModule } from './../shared/shared.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReallocatedAssetsComponent } from './reallocated-assets/reallocated-assets.component';

@NgModule({
  declarations: [
    ReallocatedAssetsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
