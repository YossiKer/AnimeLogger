import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Category } from '../../../Objects/Category';
import { CategoriesService } from '../../../Services/categories.service'

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {

  @Output() filterChange = new EventEmitter();
  @Output() sortChange = new EventEmitter();

  categories: Category[];
  categoriesStatus: object;

  currSelect: string;

  sortTypes: object[];
  currSortType: object;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.sortTypes = [
      {
        attr: 'anime_name',
        order: 'asc',
        display: 'Anime Name (A - Z)'
      },
      {
        attr: 'anime_name',
        order: 'desc',
        display: 'Anime Name (Z - A)'
      },
      {
        attr: 'last_update_date',
        order: 'asc',
        display: 'Update Date (Earliest to Latest)'
      },
      {
        attr: 'last_update_date',
        order: 'desc',
        display: 'Update Date (Latest to Earliest)'
      },
      {
        attr: 'last_watch_date',
        order: 'asc',
        display: 'Watching Date (Earliest to Latest)'
      },
      {
        attr: 'last_watch_date',
        order: 'desc',
        display: 'Watching Date (Latest to Earliest)'
      }
    ]

    this.currSortType = this.sortTypes[0];
    this.sortChange.emit(this.currSortType);

    this.currSelect = '';

    this.categoriesService.getCategories().subscribe(
      (categories) => {
        this.categories = categories;
        this.categories.sort((c1, c2) => {return c1.category_name.localeCompare(c2.category_name)});

        this.categoriesStatus = {};
        for (let category of categories) {
          this.categoriesStatus[category.category_name] = false;
        }

        this.filterChange.emit(this.categoriesStatus);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  handleCategoryChange(categoryName: string): void {
    this.categoriesStatus[categoryName] = !this.categoriesStatus[categoryName];
    this.filterChange.emit(this.categoriesStatus);
  }

  handleSortChange(sortType: object): void {
    this.currSortType = sortType;
    this.sortChange.emit(this.currSortType);
  }

  handleSelectSelection(selectTitle: string): void {
    if (selectTitle === this.currSelect) {
      this.currSelect = '';
    } else {
      this.currSelect = selectTitle;
    }
  }
}
