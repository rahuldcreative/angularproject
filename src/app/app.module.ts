import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { JuicyHeaderComponent } from './juicy-header/juicy-header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomefooterComponent } from './homefooter/homefooter.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,

    JuicyHeaderComponent,

    HomepageComponent,

    HomefooterComponent,

    ProductpageComponent,

    ContactpageComponent,

    AboutpageComponent,

    HomeNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
