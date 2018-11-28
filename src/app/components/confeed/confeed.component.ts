import { Component, OnInit } from '@angular/core';
import {Blog} from '../../models/blog';
import {FakeforconService} from '../../services/fakeforcon.service';
import {Router} from '@angular/router';

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

  constructor(private fakeforconService: FakeforconService,
    private router: Router) { }

  selectedBlog: Blog;

  onSelect(blog: Blog): void {
    this.selectedBlog = blog;
    this.selectedBlog.favourite = !this.selectedBlog.favourite;
  }

  ngOnInit() {
    this.fakeforconService.getConBlogs().subscribe(
      (response: Blog[]) => {

        console.log('show confluence');
        this.blogs = response;
        this.blogs.reverse();
        
      })
  }

}
