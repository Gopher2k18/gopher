import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  current_url: any;
  page_shown = [false,false,false,false];

  constructor(private route: ActivatedRoute,private router: Router) {

    //https://stackoverflow.com/questions/45320416/angular-router-url-returns-slash
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe( (navEnd:NavigationEnd) => {
      this.current_url = navEnd.urlAfterRedirects;
      this.setPageInfo(this.current_url);
    });
  }

  //feed = 0, confeed = 1, calendar = 2, starred = 3

  ngOnInit() {
  }

  goToFeed() {
    console.log('go to feed');
    this.setPageInfo('/feed');
    this.router.navigate(['feed']);
  }

  goToCalendar() {
    this.setPageInfo('/calendar');
    this.router.navigate(['calendar']);
  }

  goToConfeed() {
    this.setPageInfo('/confeed');
    this.router.navigate(['confeed']);
  }

  goToStar() {
    console.log('go to star');
    this.setPageInfo('/star');
    this.router.navigate(['star']);
  }

  setPageInfo(route_name: string){
    console.log(route_name);
    for(let i = 0; i < this.page_shown.length;++i){
      this.page_shown[i] = false;
    }
    if(route_name == '/feed'){
      this.page_shown[0] = true;
    }else if(route_name == '/confeed'){
      this.page_shown[1] = true;
    }else if(route_name == '/calendar'){
      this.page_shown[2] = true;
    }else if(route_name == '/star'){
      this.page_shown[3] = true;
    }

    console.log(this.page_shown);
  }

}
