import { Pipe, PipeTransform } from '@angular/core';
import { Anime } from '../Objects/Anime';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(animesList: Anime[], sortType: string): Anime[] {
    let sortedList: Anime[] = animesList;

    switch(sortType) {
      case 'Anime Name (A - Z)':
        sortedList.sort((anime1, anime2) => {return anime1.anime_name.localeCompare(anime2.anime_name)});
      break;
      case 'Anime Name (Z - A)':
        sortedList.sort((anime1, anime2) => {return anime2.anime_name.localeCompare(anime1.anime_name)});
      break;
      case 'Update Date (Earliest to Latest)':
      break;
      case 'Update Date (Latest to Earliest)':
      break;
      case 'Watching Date (Earliest to Latest)':
      break;
      case 'Watching Date (Latest to Earliest)':
      break;
    }

    return sortedList
  }

}
