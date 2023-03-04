import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboultComponent } from './viwes/aboult/aboult.component';
import { MaiusculoComponent } from './viwes/maiusculo/maiusculo.component';
import { ColorPaisComponent } from './viwes/color-pais/color-pais.component';

@NgModule({
  declarations: [
    AppComponent,
    AboultComponent,
    MaiusculoComponent,
    ColorPaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
