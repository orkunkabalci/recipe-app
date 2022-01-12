import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { menu } from '../services/bucket';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.page.html',
  styleUrls: ['./menu-detail.page.scss'],
})
export class MenuDetailPage implements OnInit {
  menuId;
  menu;
  menus;
  loading;
  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.loading=true
    this.menuId = this.route.snapshot.paramMap.get('id');
    await this.getMenu().then((data) => (this.menu = data));
    await this.getMenus().then((data) => (this.menus = data));
    this.loading=false
  }

  getMenu() {
    return menu.get(this.menuId, { queryParams: { relation: true } });
  }

  getMenus() {
    return menu.getAll({
      queryParams: {
        relation: true,
        limit: 2,
        filter: { _id: { $ne: this.menuId } },
      },
    });
  }
}
