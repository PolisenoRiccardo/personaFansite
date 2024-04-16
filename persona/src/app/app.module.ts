import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PGboxComponent } from './pgbox/pgbox.component';
import { PgComponent } from './pg/pg.component';

@NgModule({
  declarations: [
    AppComponent,
    PGboxComponent,
    PgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
