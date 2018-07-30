import { Pipe, PipeTransform } from '@angular/core';
import { Anime } from '../Objects/Anime';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(objectsList: object[], attr: string, type: string, order: string): object[] {
    console.log(type);
    type = type?type:'string';

    let sortedList: object[] = objectsList;

    switch(type.toUpperCase()) {
      case 'STRING':
        sortedList.sort((o1, o2) => (o1[attr].localeCompare(o2[attr])));
        break;
      case 'NUMBER':
        sortedList.sort((o1, o2) => (o1[attr] - o2[attr]));
        break;
      case 'DATE':
      break;
    }

    if (order === 'desc') {
      sortedList = sortedList.reverse();
    }

    return sortedList
  }

}
