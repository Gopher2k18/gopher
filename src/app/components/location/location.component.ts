import { Component, OnInit } from '@angular/core';
import {Location} from '../../models/location'

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  locations: Location = {
    helsinki: true,
    tampere: false,
    jyvaskyla: false,
    madrid: false,
    london: false,
    new_york: true
  };

  constructor() { }

  ngOnInit() {
  }

  public changeLocationInfo(loc: string){
    if(loc=='helsinki'){
      this.locations.helsinki = !this.locations.helsinki;
      console.log('WOW Helsinki: ' + this.locations.helsinki);
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

}
