import { Component, OnInit } from '@angular/core';
import { menu } from '../services/bucket';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  loading;
  menus;
  constructor() {}

  async ngOnInit() {
    this.loading=true
    await this.getMenus().then((data) => (this.menus = data));
    this.loading=false
    
  }

  getMenus() {
    return menu.getAll({ queryParams: { relation: true } });
  }
}
