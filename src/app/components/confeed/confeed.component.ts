import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';
import {BackendconnectorService} from '../../services/backendconnector.service';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-confeed',
  templateUrl: './confeed.component.html',
  styleUrls: ['./confeed.component.scss']
})
export class ConfeedComponent implements OnInit {


  blogs: Blog[] = [];
  date_map = new Map<string,boolean>();

  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router, private datePipe: DatePipe) { }

  selectedBlog: Blog;

  onSelect(blog: Blog): void {
    this.selectedBlog = blog;
    this.selectedBlog.favourite = !this.selectedBlog.favourite;
  }

  ngOnInit() {
    this.backendconnectorService.getConBlogs().subscribe(
      (response: Blog[]) => {

        console.log('show confluence');

        response.forEach(element => {
          this.blogs.push(new Blog(element));
        });

        this.blogs.reverse();
        this.collect_date_info();



      })
  }

  show_date(date_to_shown: string): boolean{
    return this.date_map.get(date_to_shown);
  }

  collect_date_info(){
    let date_before = '';
    let this_date = '';
    console.log(this.blogs.length);
    if(this.blogs.length>0){
      this.date_map.set(this.blogs[0].ts,true);
    }

    for(let i = 1; i < this.blogs.length; ++i){

      date_before = this.datePipe.transform(new Date(Number(this.blogs[i-1].ts)*1000));
      this_date = this.datePipe.transform(new Date(Number(this.blogs[i].ts)*1000));
      if(date_before == this_date){
        this.date_map.set(this.blogs[i].ts,false);
      }else{
        this.date_map.set(this.blogs[i].ts,true);
      }

    }

  }

}
