import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RaceChartComponent } from './components/race-chart/race-chart.component';
import { SortedPipe } from './pipes/sorted.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { IntPipe } from './pipes/int.pipe';
import { ForinPipe } from './pipes/forin.pipe';
import { NumericPipe } from './pipes/numeric.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RaceChartComponent,
    SortedPipe,
    KeysPipe,
    IntPipe,
    ForinPipe,
    NumericPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
