import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import {BackendconnectorService} from './services/backendconnector.service';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    CalendarComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BackendconnectorService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
