import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeedComponent} from './components/feed/feed.component';
import {FilterComponent} from './components/filter/filter.component';
import {CalendarListComponent} from './components/calendar-list/calendar-list.component';
import {LogInPageComponent} from './components/log-in-page/log-in-page.component';
import {LocationComponent} from './components/location/location.component';
import {ConfeedComponent} from './components/confeed/confeed.component';
import {CardComponent} from './components/card/card.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/feed'
  },
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'filter',
    component: FilterComponent
  },
  {
    path: 'calendar',
    component: CalendarListComponent
  },
  {
    path: 'login',
    component: LogInPageComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'confeed',
    component: ConfeedComponent
  },
  {
    path: 'card',
    component: CardComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
