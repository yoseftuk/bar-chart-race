import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'int'
})
export class IntPipe implements PipeTransform {

  transform(value: number): number {
    return parseInt('' + value, 10);
  }

}
