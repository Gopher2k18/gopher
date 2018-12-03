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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {DatePipe} from '@angular/common';


import { AppComponent } from './app.component';
import { FeedComponent } from './components/feed/feed.component';
import {BackendconnectorService} from './services/backendconnector.service';
import { TopbarComponent } from './components/topbar/topbar.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';
import { FilterComponent } from './components/filter/filter.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { LocationComponent } from './components/location/location.component';
import { ConfeedComponent } from './components/confeed/confeed.component';
import { FakeforconService } from './services/fakeforcon.service';
import { CardComponent } from './components/card/card.component';
import { StarredComponent } from './components/starred/starred.component';
import { DateformatterPipe } from './pipes/dateformatter.pipe';
import { TimePipe } from './pipes/time.pipe';


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
    LogInPageComponent,
    LocationComponent,
    ConfeedComponent,
    CardComponent,
    StarredComponent,
    DateformatterPipe,
    TimePipe
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
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonToggleModule
  ],
  providers: [BackendconnectorService, FakeforconService, HttpClientModule, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
