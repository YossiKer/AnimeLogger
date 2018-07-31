import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(objectList: object[], filters: object, attr: string, type: string): any {
    let filteredList = [];

    if (this.checkNoFilters(filters) && type !== 'content') {
      return objectList;
    }

    switch(type) {
      case 'array': 
        for (let object of objectList) {
          let found = false;
          for (let filter in filters) {
            if (!found && filters[filter]) {
              found = object[attr].indexOf(filter) !== -1;
            }
          }

          if (found) {
            filteredList.push(object);
          }
        }

        break;
      case 'object':
        for (let object of objectList) {
          let found = false;
          for (let filter in filters) {
            if (!found && filters[filter]) {
              found = object[attr] == filter;
            }
          }

          if (found) {
            filteredList.push(object);
          }
        }
        break;
      case 'content':
        for (let object of objectList) {
          if (object[attr].toUpperCase().indexOf(filters['searchInput'].toUpperCase()) !== -1) {
            filteredList.push(object);
          }
        }
    }

    return filteredList;
  }

  checkNoFilters(filters: object): boolean {

    let haveFilters: boolean = false;

    for (let filter of Object.keys(filters)) {
      if (filters[filter]) {
        return false;
      }
    }

    return true;

  }

}
