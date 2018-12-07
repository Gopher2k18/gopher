import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BackendconnectorService} from '../../services/backendconnector.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {

  constructor(private router: Router, private backendconnectorService: BackendconnectorService) { }



  goToFeed(){
    console.log('go to feed');
    this.backendconnectorService.login();
    this.router.navigate(['feed']);
  }

  ngOnInit() {
    if(localStorage.getItem('token') !=null){
      this.router.navigate(['feed']);
    }
    this.backendconnectorService.getConfMessages().subscribe();
    this.backendconnectorService.getSlackMessages().subscribe();
  }

}
