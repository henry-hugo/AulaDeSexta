import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropbindComponent } from './views/propbind/propbind.component';
import { ImgComponent } from './views/img/img.component';
import { MegaevolucaoComponent } from './views/megaevolucao/megaevolucao.component';

@NgModule({
  declarations: [
    AppComponent,
    PropbindComponent,
    ImgComponent,
    MegaevolucaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
