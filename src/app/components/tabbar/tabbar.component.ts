import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToFeed(){
    console.log('go to feed');
    this.router.navigate(['feed']);
  }

  goToCalendar(){
    this.router.navigate(['calendar']);
  }

}
