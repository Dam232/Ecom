import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PagerComponent } from './components/pager/pager.component';
import {  CarouselModule, PaginationModule } from 'ngx-bootstrap';
// import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
// import { PagerComponent } from './components/pager/pager.component';


@NgModule({
  declarations: [
    PagingHeaderComponent,
    PagerComponent
  ],
  imports:[
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),

  ],
  exports: [
    PaginationModule ,
    CarouselModule,
    PagingHeaderComponent,
    PagerComponent
  ]
})

export class SharedModule { }