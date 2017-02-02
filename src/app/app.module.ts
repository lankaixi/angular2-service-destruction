import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { PageAModule } from './page-a';
import { PageBModule } from './page-b';
import { InstructionsComponent } from './instructions/instructions.component';

@NgModule({
  declarations: [AppComponent, InstructionsComponent, InstructionsComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    PageAModule,
    PageBModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
