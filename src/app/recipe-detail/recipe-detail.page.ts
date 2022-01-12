import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipe } from '../services/bucket';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipeIp;
  recipe;
  recipes;
  loading;
  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.loading=true
    this.recipeIp = this.route.snapshot.paramMap.get('id');
    await this.getRecipe().then((data) => (this.recipe = data));
    await this.getRecipes().then((data) => (this.recipes = data));
    await this.recipeCounterAdd();
    this.loading=false
  }
  slideOpts = {
    slidesPerView: 1,
    autoplay: true,
  };

  recipeCounterAdd() {
    this.recipe.click_counter = this.recipe.click_counter + 1;
    recipe.patch(this.recipe);
  }

  getRecipe() {
    return recipe.get(this.recipeIp, { queryParams: { relation: true } });
  }
  getRecipes() {
    return recipe.getAll({
      queryParams: {
        limit: 2,
        filter: {
          'category._id': this.recipe.category._id,
          _id: { $ne: this.recipeIp },
        },
      },
    });
  }
}
