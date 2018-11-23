import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss']
})
export class LogInPageComponent implements OnInit {

  constructor(private router: Router) { }

  loggedIn = false;

  hide = true;

  logIn(){
    this.loggedIn = !this.loggedIn;
  }

  goToFeed(){
    console.log('go to feed');
    this.router.navigate(['feed']);
  }

  ngOnInit() {
  }

}
