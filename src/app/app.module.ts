import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DojomailComponent } from './dojomail/dojomail.component';
import { RetroBarcodeGeneratorComponent } from './retro-barcode-generator/retro-barcode-generator.component';
import {RandomColorsService} from './service/random-colors.service';

@NgModule({
  declarations: [
    AppComponent,
    DojomailComponent,
    RetroBarcodeGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RandomColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
