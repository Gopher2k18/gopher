import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FullCalendarModule } from 'ng-fullcalendar'

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import {BackendconnectorService} from './services/backendconnector.service';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    CalendarListComponent,
    TopbarComponent,
    TabbarComponent,
    CalendarListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    FullCalendarModule
  ],
  providers: [BackendconnectorService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
