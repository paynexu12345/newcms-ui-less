import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { NgPoppinsModule } from 'projects/ng-poppins/src/public-api';
import { HeaderComponent } from './header/header.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { Layout1Component } from './layout/layout1/layout1.component';
import { Layout2Component } from './layout/layout2/layout2.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentHomeComponent,
    Layout1Component,
    Layout2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpModule,
    NgPoppinsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
