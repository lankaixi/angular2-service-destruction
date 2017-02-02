import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageAComponent } from './page-a.component';
import { PageAService } from './page-a.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageAComponent, PageAComponent],
  exports: [PageAComponent],
  providers: [PageAService]
})
export class PageAModule { }
