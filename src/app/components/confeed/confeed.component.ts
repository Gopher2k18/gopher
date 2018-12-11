import { Card } from './../../models/card';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BackendconnectorService } from '../../services/backendconnector.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-confeed',
  templateUrl: './confeed.component.html',
  styleUrls: ['./confeed.component.scss']
})
export class ConfeedComponent implements OnInit {


  blogs: Card[] = [];
  date_map = new Map<string, boolean>();

  constructor(private backendconnectorService: BackendconnectorService,
    private router: Router, private datePipe: DatePipe) { }

  selectedBlog: Blog;

  onSelect(blog: Blog): void {
    this.selectedBlog = blog;
    this.selectedBlog.favourite = !this.selectedBlog.favourite;
  }

  ngOnInit() {
    this.backendconnectorService.getConfMessages().subscribe({
      next: (x: Card) => this.blogs.push(x),
      complete: () => {
        this.blogs.reverse();
        this.collect_date_info();
      }
    });
  }

  /*
    To decide in html to show or not to show the date
  */
  show_date(date_to_shown: string): boolean {
    return this.date_map.get(date_to_shown);
  }

  /*
    With this one collects data to map structure so that the date label is shown only when needed
    so that there will be no useless date labels, when same posting date repeats
  */
  collect_date_info() {
    let date_before = '';
    let this_date = '';
    console.log(this.blogs.length);
    if (this.blogs.length > 0) {
      this.date_map.set(this.blogs[0].time, true);
    }

    for (let i = 1; i < this.blogs.length; ++i) {

      date_before = this.datePipe.transform(new Date(Number(this.blogs[i - 1].time) * 1000));
      this_date = this.datePipe.transform(new Date(Number(this.blogs[i].time) * 1000));
      if (date_before === this_date) {
        this.date_map.set(this.blogs[i].time, false);
      } else {
        this.date_map.set(this.blogs[i].time, true);
      }

    }

  }

}
