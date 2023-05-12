import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventBindingComponent } from './views/event-binding/event-binding.component';
import { AparecerEsumirComponent } from './views/aparecer-esumir/aparecer-esumir.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    AparecerEsumirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
