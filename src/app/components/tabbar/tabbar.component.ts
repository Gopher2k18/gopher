import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import {BackendconnectorService} from '../../services/backendconnector.service';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss']
})
export class TabbarComponent implements OnInit {

  current_url: any; //to keep track what component is currently routed by router
  page_shown = [false,false,false,false];   //feed = 0, confeed = 1, calendar = 2, starred = 3

  constructor(private route: ActivatedRoute,private router: Router,private backendconnectorService: BackendconnectorService) {

    //https://stackoverflow.com/questions/45320416/angular-router-url-returns-slash
    //To get the component, what is currently shown:
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe( (navEnd:NavigationEnd) => {
      this.current_url = navEnd.urlAfterRedirects;
      this.setPageInfo(this.current_url);
    });
  }



  ngOnInit() {
  }

  /*
    For html button to go to slack feed view
  */
  goToSlackFeed() {
    this.setPageInfo('/feed');
    this.router.navigate(['feed']);
  }

  /*
    For htom button to go to calendar view
  */
  goToCalendar() {
    this.setPageInfo('/calendar');
    this.router.navigate(['calendar']);
  }

  /*
    For html button to go to Confluence feed view
  */
  goToConfeed() {
    this.setPageInfo('/confeed');
    this.router.navigate(['confeed']);
  }

  /*
    For html button to go to starred posts view
  */
  goToStar() {
    console.log('go to star');
    this.setPageInfo('/star');
    this.router.navigate(['star']);
  }

  /*
    For html to highlight the button, that would show the page one is currently viewing
  */
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
