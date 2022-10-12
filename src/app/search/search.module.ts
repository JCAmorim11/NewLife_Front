import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { ComponentsComponent } from './components/components.component';
import { SearchHuntComponent } from './components/search-hunt/search-hunt.component';
import { SearchResponseComponent } from './components/search-response/search-response.component';
import { SharedModule } from '../shared/shared.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  declarations: [
    ComponentsComponent,
    SearchHuntComponent,
    SearchResponseComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule, 
    MatTableModule,
    MatPaginatorModule,
    SharedModule
  ],
  exports: [

  ]
})
export class SearchModule { }
