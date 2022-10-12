import { SearchHuntComponent } from './../search/components/search-hunt/search-hunt.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterVehiclesComponent } from './components/register-vehicles/register-vehicles.component';
import { RegisterResidentComponent } from './components/register-resident/register-resident.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { RegisterVisitComponent } from './components/register-visit/register-visit.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterTabsComponent } from './components/register-tabs/register-tabs.component';


@NgModule({
  declarations: [
    RegisterTabsComponent,
    RegisterVehiclesComponent,
    RegisterResidentComponent,
    RegisterWorkerComponent,
    RegisterVisitComponent,
    
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    
  ]
})
export class RegisterModule { }
