import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeric'
})
export class NumericPipe implements PipeTransform {

  transform(value: number): string {
    return ('' + value).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

}
