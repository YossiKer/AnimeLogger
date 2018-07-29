import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(objectList: object[], filters: object, attr: string, type: string): any {
    let filteredList = [];
    
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
    }

    return filteredList;
  }

}
