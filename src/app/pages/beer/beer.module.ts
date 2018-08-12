import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { BeerComponent } from './beer.component';
import { RandomViewComponent } from './random-view/random-view.component';
import { SearchViewComponent } from './search-view/search-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    BeerComponent,
    RandomViewComponent,
    SearchViewComponent
  ]
})
export class BeerModule { }
