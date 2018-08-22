import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VendingBlockComponent } from './vending-block/vending-block.component';
import { DrinkItemsComponent } from './vending-block/drink-items/drink-items.component';

import { HttpClientModule }   from '@angular/common/http';
import { HttpService } from './_services/http.service'

@NgModule({
  declarations: [
    AppComponent,
    VendingBlockComponent,
    DrinkItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
