import { Component, OnInit } from '@angular/core';
import { Category } from '../../Objects/Category';
import { CategoriesService } from '../../Services/categories.service'

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  categories: Category[];
  categoriesStatus: object;

  currSelect: string;

  sortTypes: string[];
  currSortType: string;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {

    this.sortTypes = [
      'Anime Name (A - Z)',
      'Anime Name (Z - A)',
      'Update Date (Earliest to Latest)',
      'Update Date (Latest to Earliest)',
      'Watching Date (Earliest to Latest)',
      'Watching Date (Latest to Earliest)'
    ]

    this.currSortType = this.sortTypes[5];
    
    this.currSelect = '';

    this.categoriesService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;

        this.categoriesStatus = {};
        for (let category of categories) {
          this.categoriesStatus[category.category_name] = false;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleChange(categoryName: string): void {
    this.categoriesStatus[categoryName] = !this.categoriesStatus[categoryName];
    console.log(this.categoriesStatus);
  }

  handleSelectSelection(selectTitle: string): void {
    if (selectTitle === this.currSelect) {
      this.currSelect = '';
    } else {
      this.currSelect = selectTitle;
    }
  }
}
