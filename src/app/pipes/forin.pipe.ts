import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'forin'
})
export class ForinPipe implements PipeTransform {

  transform(value: number): any {
    return Array.from(new Array(value), (t, i) => i);
  }

}
