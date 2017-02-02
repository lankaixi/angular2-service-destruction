import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageBComponent } from './page-b.component';
import { PageBService } from './page-b.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageBComponent],
  exports: [PageBComponent],
  providers: [PageBService]
})
export class PageBModule { }
