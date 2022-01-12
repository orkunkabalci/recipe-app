import { Component, OnInit } from '@angular/core';
import { site_config } from '../services/bucket';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  aboutus
  loading:boolean
  constructor() { }

 async ngOnInit() {
  this.loading=true
    await this.getAboutus().then((data)=>this.aboutus=data)
this.loading=false
  }


  getAboutus(){
    return site_config.get('61dbfdabc0da93002c1dedbb')
  }

}
