import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '../../models/location';
import { Filter } from '../../models/filter';
import { BackendconnectorService } from '../../services/backendconnector.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  locations: Location;
  filters: Filter;
  slackFilters: Map<string, boolean>;
  buttons = [];

  showingSlack = false;

  constructor(private router: Router, private backendconnectorService: BackendconnectorService) { }

  ngOnInit() {
    this.slackFilters = this.backendconnectorService.getSlackFilter();
    this.slackFilters.forEach((val, key, fil) => {
      this.buttons.push(key);
    });
    this.buttons = this.buttons.sort((a, b) => {
      if (a > b) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(this.slackFilters);
    console.log(this.backendconnectorService.getSlackFilter());
  }

  public getState(button: string): string {
    if (this.slackFilters.get(button)) {
      return 'on';
    } else {
      return 'off';
    }
  }

  public flip(button: string) {
    const x = this.slackFilters.get(button);
    this.slackFilters.set(button, !x);
  }

  public goToLocations() {
    console.log('going to locations');
    this.router.navigate(['location']);

  }

  showSlack() {
    this.showingSlack = true;
  }

  showConfluence() {
    this.showingSlack = false;
  }

}
