import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './components/feed/feed.component';
import { FilterComponent } from './components/filter/filter.component';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { ConfeedComponent } from './components/confeed/confeed.component';
import { StarredComponent } from './components/starred/starred.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
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
    path: 'confeed',
    component: ConfeedComponent
  },
  {
    path: 'star',
    component: StarredComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
