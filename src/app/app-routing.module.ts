import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructionsComponent } from './instructions/instructions.component';
import { PageAComponent } from './page-a';
import { PageBComponent } from './page-b';

const routes: Routes = [
  {
    path: 'instructions',
    component: InstructionsComponent
  },
  {
    path: 'page-a',
    component: PageAComponent
  },
  {
    path: 'page-b',
    component: PageBComponent
  },
  {
    path: '',
    redirectTo: 'instructions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
