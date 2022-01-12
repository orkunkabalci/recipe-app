import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { blog } from '../services/bucket';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.page.html',
  styleUrls: ['./blog-detail.page.scss'],
})
export class BlogDetailPage implements OnInit {
  blogIp;
  blog;
  loading;
  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.loading = true;
    this.blogIp = this.route.snapshot.paramMap.get('id');
    await this.getBlog().then((data) => (this.blog = data));
    this.loading = false;
  }

  getBlog() {
    return blog.get(this.blogIp);
  }
}
