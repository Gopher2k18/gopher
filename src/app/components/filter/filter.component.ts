import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '../../models/location';
import {Filter} from '../../models/filter';
import {BackendconnectorService} from '../../services/backendconnector.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit {

  locations: Location;
  filters: Filter;


  constructor(private router: Router, private backendconnectorService: BackendconnectorService) { }

  ngOnInit() {
    this.locations = this.backendconnectorService.getLocations();
    this.filters = this.backendconnectorService.getFilters();
  
  }

  public goToLocations(){
    console.log('going to locations');
    this.router.navigate(['location']);
  }

  public changeFilterInfo(filtered: string){
    if(filtered == 'meeting'){
      this.filters.meeting = !this.filters.meeting;
    }else if(filtered == 'event'){
      this.filters.event = !this.filters.event;
    }else if(filtered == 'glt'){
      this.filters.glt = !this.filters.glt;
    }else if(filtered == 'club'){
      this.filters.club = !this.filters.club;
    }
  }

}
