import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Binding2viasComponent } from './views/binding2vias/binding2vias.component';
import { CalculadorainstaComponent } from './views/calculadorainsta/calculadorainsta.component';
import { CachorroComponent } from './views/cachorro/cachorro.component';

@NgModule({
  declarations: [
    AppComponent,
    Binding2viasComponent,
    CalculadorainstaComponent,
    CachorroComponent
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
