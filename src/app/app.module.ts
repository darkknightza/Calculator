import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalculatorVComponent } from './calculator-v/calculator-v.component';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorVComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
