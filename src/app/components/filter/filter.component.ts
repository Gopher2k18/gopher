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


  showingSlack = false;

  constructor(private router: Router, private backendconnectorService: BackendconnectorService) { }

  ngOnInit() {

  }

  showSlack(){
    this.showingSlack=true;
  }

  showConfluence(){
    this.showingSlack=false;
  }

}
