import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VendingBlockComponent } from './vending-block/vending-block.component';
import { DrinkItemsComponent } from './vending-block/drink-items/drink-items.component';

import { HttpClientModule }   from '@angular/common/http';
import { HttpService } from './_services/http.service';
import { AdminBlockComponent } from './admin-block/admin-block.component';
import { ConfigBlockComponent } from './admin-block/config-block/config-block.component';
import { EditDrinksBlockComponent } from './admin-block/edit-drinks-block/edit-drinks-block.component';


const appRoutes: Routes =[
  { path: '', component: VendingBlockComponent},
  { path: 'admin/:key', component: AdminBlockComponent},
  { path: '**', component: VendingBlockComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VendingBlockComponent,
    DrinkItemsComponent,
    AdminBlockComponent,
    ConfigBlockComponent,
    EditDrinksBlockComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
