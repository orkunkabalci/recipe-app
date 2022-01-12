import { Component, OnInit } from '@angular/core';
import { recipe, recipe_category } from '../services/bucket';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  searchTerm: string;
  searched;
  headCategories;
  secCategories;
  activeCat;
  loading;
  async ngOnInit() {
    this.loading = true;
    await this.getHeadCategories().then((data) => (this.headCategories = data));
   await this.getSecCategories().then((data) => (this.secCategories = data));
   this.loading=false
  }

  getHeadCategories() {
    return recipe_category.getAll({
      queryParams: {
        relation: true,
        filter: {
          sub_category: null,
        },
      },
    });
  }

  getSecCategories() {
    return recipe_category.getAll({
      queryParams: {
        relation: true,
        filter: {
          sub_category: { $in: this.headCategories.map((item) => item._id) },
        },
      },
    });
  }
  ionViewDidLeave() {
    this.searchTerm = '';
  }
  async searchRecipe(terms: any) {
    this.searched = await recipe.getAll({
      queryParams: {
        filter: {
          title: { $regex: terms },
        },
      },
    });
  }
}
