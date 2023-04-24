import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DetailInfoComponent } from './components/detail-info/detail-info.component';
import { HomeComponent } from './components/home/home.component';
import { ContectComponent } from './components/contect/contect.component';
import { ERRORComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailInfoComponent,
    HomeComponent,
    ContectComponent,
    ERRORComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
