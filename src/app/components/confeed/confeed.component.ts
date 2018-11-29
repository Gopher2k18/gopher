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

        response.forEach(element => {
          this.blogs.push(new Blog(element));
        });
        
        this.blogs.reverse();

        for(let i=0;i<this.blogs.length;i++) {

          if(this.blogs[i].ts != undefined)
          {
            const unixarry = this.blogs[i].ts.split('.');
            const date = new Date(Number(unixarry[0])*1000);
            this.blogs[i].ts = date.getHours()+':'+date.getMinutes()+' '+ date.getDate()+'.'+ date.getMonth()+ '.' +date.getFullYear();
          }

        }
        
      })
  }

}
