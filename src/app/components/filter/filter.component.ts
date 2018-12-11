import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../../models/location';
import { Filter } from '../../models/filter';
import { BackendconnectorService } from '../../services/backendconnector.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  locations: Location;
  filters: Filter;
  slackFilters: Map<string, boolean>;
  slackButtons = [];
  confFilters: Map<string, boolean>;
  confButtons = [];

  showingSlack = true;

  constructor(private router: Router, private backendconnectorService: BackendconnectorService) { }

  ngOnInit() {
    this.slackFilters = this.backendconnectorService.getSlackFilter();
    this.confFilters = this.backendconnectorService.getConfFilter();
    this.setUpFilters(this.slackFilters, this.slackButtons);
    this.setUpFilters(this.confFilters, this.confButtons);
  }

  private setUpFilters(filters: Map<string, boolean>, buttons: string[]) {
    filters.forEach((val, key, fil) => {
      buttons.push(key);
    });
    buttons = buttons.sort((a, b) => {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  public getState(button: string, source: boolean): string {
    const x = source ? this.slackFilters.get(button) : this.confFilters.get(button);
    if (x) {
      return 'on';
    } else {
      return 'off';
    }
  }

  public flip(button: string, source: boolean) {
    if (source) {
      this.slackFilters.set(button, !this.slackFilters.get(button));
    } else {
      this.confFilters.set(button, !this.confFilters.get(button));
    }
  }

  /*
    Set all filters to their default state, which is true
  */
  public resetFilter(source: boolean) {
    if (source) {
      this.slackFilters.forEach((val, key, filters) => {
        filters.set(key, true);
      });
    } else {
      this.confFilters.forEach((val, key, filters) => {
        filters.set(key, true);
      });
    }
  }


  /*
    For slack button in html to show slack filters
  */
  showSlack() {
    this.showingSlack = true;
  }

  /*
    For confluence button in html to show confluence filters
  */
  showConfluence() {
    this.showingSlack = false;
  }

}
