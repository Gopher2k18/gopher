import { Component, OnInit } from '@angular/core';
import {Location} from '../../models/location'
import {BackendconnectorService} from '../../services/backendconnector.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  locations: Location = {
    helsinki: false,
    tampere: false,
    jyvaskyla: false,
    madrid: false,
    london: false,
    new_york: false
  }

  constructor(private backendconnectorService: BackendconnectorService, private router: Router) { }

  ngOnInit() {
    this.locations = this.backendconnectorService.getLocations();
  }

  public changeLocationInfo(loc: string){
    if(loc=='helsinki'){
      this.locations.helsinki = !this.locations.helsinki;
    }else if(loc=='tampere'){
      this.locations.tampere = !this.locations.tampere;
    }else if(loc=='jyvaskyla'){
      this.locations.jyvaskyla = !this.locations.jyvaskyla;
    }else if(loc =='madrid'){
      this.locations.madrid = !this.locations.madrid;
    }else if(loc =='london'){
      this.locations.london = !this.locations.london;
    }else if(loc == 'new_york'){
      this.locations.new_york = !this.locations.new_york;
    }
  }

  public goToFilter(){
    this.backendconnectorService.setLocations(this.locations);
    this.router.navigate(['filter']);
  }

}
