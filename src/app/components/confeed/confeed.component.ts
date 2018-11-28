import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';


@Component({
  selector: 'app-confeed',
  templateUrl: './confeed.component.html',
  styleUrls: ['./confeed.component.scss']
})
export class ConfeedComponent implements OnInit {

  blog: Blog = {
    _id: '',
    name: '',
    user: '',
    tags: [],
    ts: '',
    link: '',
    favourite: false
  }

  blogs: Blog[] = [];

  constructor() { }

  selectedBlog: Blog;

  onSelect(blog: Blog): void {
    this.selectedBlog = blog;
    this.selectedBlog.favourite = !this.selectedBlog.favourite;
  }

  ngOnInit() {
  }

}
