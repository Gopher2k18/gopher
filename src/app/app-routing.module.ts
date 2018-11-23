import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FeedComponent} from './components/feed/feed.component';
import {FilterComponent} from './components/filter/filter.component';
import {CalendarListComponent} from './components/calendar-list/calendar-list.component';
import {LogInPageComponent} from './components/log-in-page/log-in-page.component';

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
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
