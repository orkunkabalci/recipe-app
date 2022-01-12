import { Component, OnInit } from '@angular/core';
import { blog, site_config } from '../services/bucket';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showcases;
  blog;
  loading;
  constructor() {}
  async ngOnInit() {
    this.loading=true
  await  this.getShowcases().then((data) => (this.showcases = data.showcases));
   await this.getBlog().then((data) => (this.blog = data));
   this.loading=false

  }

  slideOpts = {
    slidesPerView: 1,
    autoplay: true,
  };
  slideOpts2 = {
    slidesPerView: 1.5,
    autoplay: true,
  };

  getBlog() {
    return blog.getAll({
      queryParams: { relation: true, sort: { date: 1 }, limit: 3 },
    });
  }
  getShowcases() {
    return site_config.get('61dbfdabc0da93002c1dedbb', {
      queryParams: { relation: true },
    });
  }
}
