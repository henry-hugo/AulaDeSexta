import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex4Component } from './views/ex4/ex4.component';
import { Ex5Component } from './views/ex5/ex5.component';
import { ForComponent } from './views/for/for.component';
import { NgForex1Component } from './views/ng-forex1/ng-forex1.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex4Component,
    Ex5Component,
    ForComponent,
    NgForex1Component
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
