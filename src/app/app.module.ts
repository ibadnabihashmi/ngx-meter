import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxMeterModule } from "ngx-meter";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxMeterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
