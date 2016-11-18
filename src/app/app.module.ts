import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { ChartDirective } from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
