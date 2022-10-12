import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterResidentComponent } from './components/register-resident/register-resident.component';
import { RegisterVehiclesComponent } from './components/register-vehicles/register-vehicles.component';
import { RegisterVisitComponent } from './components/register-visit/register-visit.component';
import { RegisterWorkerComponent } from './components/register-worker/register-worker.component';
import { RegisterTabsComponent } from './components/register-tabs/register-tabs.component';

const routes: Routes = [
  {path: '', component: RegisterTabsComponent,
    children: [
    {path: 'vehicles', component: RegisterVehiclesComponent},
    {path: 'resident', component: RegisterResidentComponent},
    {path: 'visit',    component: RegisterVisitComponent},
    {path: 'worker',   component: RegisterWorkerComponent},
    {path: 'vehicles/:id', component: RegisterVehiclesComponent},
    {path: 'resident/:id', component: RegisterResidentComponent},
    {path: 'worker/:id', component: RegisterWorkerComponent},
    {path: 'visit/:id', component: RegisterResidentComponent}
    ]
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
