import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipe, recipe_category } from '../services/bucket';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes;
  selectedCategory;
  loading
  title
  constructor(private route: ActivatedRoute) {}


async  ngOnInit() {
  this.loading=true
    this.selectedCategory = this.route.snapshot.paramMap.get('id');

    await this.getRecipes().then(()=> this.title=this.recipes[0]?.category.title)
    this.loading=false
  }
 
  async getRecipes() {
    this.recipes = await recipe.getAll({
      queryParams: {
        relation: true,
        filter: {
          'category._id': this.selectedCategory,
        },
      },
    });
  }

}
