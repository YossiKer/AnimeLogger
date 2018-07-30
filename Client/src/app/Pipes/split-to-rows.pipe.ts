import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitToRows'
})
export class SplitToRowsPipe implements PipeTransform {

  transform(objectList: object[], objectsInLine: number): object[][] {
    let rows = [];
    
    let objectIndex = 0;
    for (let object of objectList) {
      let rowIndex = Math.floor(objectIndex / objectsInLine);
      if (!rows[rowIndex]) {
        rows.push([]);
      }

      rows[rowIndex].push(object);
      objectIndex++;
    }

    return rows;
  }

}
