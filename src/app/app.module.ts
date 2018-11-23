import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FullCalendarModule } from 'ng-fullcalendar';
import {AppRoutingModule} from './app-routing.module';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import {BackendconnectorService} from './services/backendconnector.service';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    CalendarListComponent,
    TopbarComponent,
    TabbarComponent,
    CalendarListComponent,
    TopbarComponent,
    FilterComponent,
    LogInPageComponent
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
    FullCalendarModule,
    AppRoutingModule,
    MatInputModule
  ],
  providers: [BackendconnectorService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
