import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './viwes/ex1/ex1.component';
import { Ex2Component } from './viwes/ex2/ex2.component';
import { Ex3Component } from './viwes/ex3/ex3.component';
import { ExforComponent } from './viwes/exfor/exfor.component';
import { ExifComponent } from './viwes/exif/exif.component';
import { ExbindingComponent } from './viwes/exbinding/exbinding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    ExforComponent,
    ExifComponent,
    ExbindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
