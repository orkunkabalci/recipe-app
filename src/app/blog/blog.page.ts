import { Component, OnInit } from '@angular/core';
import { blog } from '../services/bucket';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  constructor() {}
  blogs;
  loading;
  async ngOnInit() {
    this.loading=true
    await this.getBlogs().then((data) => (this.blogs = data));
    this.loading=false
  }

  getBlogs() {
    return blog.getAll({ queryParams: { relation: true } });
  }
}
