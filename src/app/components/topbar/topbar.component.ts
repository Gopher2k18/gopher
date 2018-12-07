import { Component, OnInit } from '@angular/core';
import { BackendconnectorService } from '../../services/backendconnector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(private router: Router, public backendconnectorService: BackendconnectorService) { }

  ngOnInit() {
  }

  public goToFilter() {
    this.router.navigate(['filter']);

  }

  public goToLogin() {
    this.backendconnectorService.logout();
    this.router.navigate(['login']);
  }

}
