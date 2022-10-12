import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import {MatTooltipModule} from '@angular/material/tooltip';


import { NavegationComponent } from './components/navegation/navegation.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

export var Login =  false;
export var convidado = true; 
export function valido(){
  Login = true;
  return Login;
}

export function check(){
  return Login;
}

/** 
 *     MaskPipe,
    NgxMaskModule,
        MatDatepickerModule,
    MatDialogModule,
    NgxMaskModule.forRoot(),
        MatSelectModule,
    
    MAT_DATE_LOCALE,
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from "@angular/material/stepper";
//import { QuicklinkModule } from 'ngx-quicklink';

import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
    MatExpansionModule,
    MatStepperModule,

    MatTableDataSource,
    MatTreeModule,
    OverlayModule,
    MatPaginatorIntl,
    import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule, validateHorizontalPosition} from '@angular/cdk/overlay';
    MatPaginatorModule,
        MatProgressSpinnerModule,
*/
var sModule = [ 
    MatSliderModule,

    MatIconModule,
    MatTabsModule,
    MatButtonModule,

    MatToolbarModule,

    RouterModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    A11yModule,
    HttpClientModule,

    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    
    MatButtonModule,
    MatButtonToggleModule,

    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,

    MatRippleModule,

    MatSliderModule,

    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    PortalModule,
    ScrollingModule,
    FlexLayoutModule,
  ];

@NgModule({
  declarations: [
    NavegationComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],

  imports: [
    CommonModule, 
    sModule,
  ],

  exports: [
    sModule,
  ]
})
export class SharedModule { }
