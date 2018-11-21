import { Component, OnInit } from '@angular/core';
import {BackendconnectorService} from '../../services/backendconnector.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToFilter(){
    console.log("go to filter");
    this.router.navigate(['filter']);
  }

}
