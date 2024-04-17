import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PGboxComponent } from './pgbox/pgbox.component';
import { PgComponent } from './pg/pg.component';
import { PgDetailsComponent } from './pg-details/pg-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PGboxComponent,
    PgComponent,
    PgDetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
