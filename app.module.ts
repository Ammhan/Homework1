import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeCoponent } from './home/home.component';
import { NavbarCoponent } from './navbar/navbar.component';
import { TopBannerCoponent } from './topbanner/topbanner.component';
import { CategoryMenuCoponent } from './categorymenu/categorymenu.component'; 
import { SearchBarCoponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent, 
    HomeCoponent, 
    NavbarCoponent, 
    TopBannerCoponent, 
    CategoryMenuCoponent,
    SearchBarCoponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
