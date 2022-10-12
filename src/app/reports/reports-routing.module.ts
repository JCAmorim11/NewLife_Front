import { ReallocatedAssetsComponent } from './reallocated-assets/reallocated-assets.component';
import { ReportsModule } from './reports.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ReallocatedAssetsComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
