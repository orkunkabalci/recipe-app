import { Component, OnInit } from '@angular/core';
import { recipe } from '../services/bucket';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {
  lastWeek;
  lastMonth;
  recipes;
  today;
  activeSegment = 'week';
  loading: boolean;
  constructor() {}

  async ngOnInit() {
    this.loading = true;
    await this.takeLastWeek();
    await this.takeLastMonth();
    await this.getLastWeeksRecipe();
    this.loading = false;
  }

  takeLastWeek() {
    this.today = new Date();
    this.lastWeek = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.today.getDate() - 7
    );
    this.lastWeek = 'Date(' + this.lastWeek.toISOString() + ')';
    this.today = this.today.toISOString();
    this.today = 'Date' + this.today;
  }
  takeLastMonth() {
    this.today = new Date();
    this.lastMonth = new Date(
      this.today.getFullYear(),
      this.today.getMonth(),
      this.today.getDate() - 30
    );
    this.lastMonth = 'Date(' + this.lastMonth.toISOString() + ')';
    this.today = this.today.toISOString();
    this.today = 'Date(' + this.today + ')';
  }
  segmentChanged(data) {
    this.activeSegment = data;
  }

  async getLastWeeksRecipe() {
    this.recipes = await recipe.getAll({
      queryParams: {
        filter: {
          date: {
            $gte: this.lastWeek,
          },
        },
      },
    });
  }
  async getLastMonthRecipe() {
    this.loading = true;
    this.recipes = await recipe.getAll({
      queryParams: {
        filter: {
          date: {
            $gte: this.lastMonth,
          },
        },
      },
    });
    this.loading = false;
  }

  async getAllRecipes() {
    this.loading = true;
    this.recipes = await recipe.getAll();
    this.loading = false;
  }
}
