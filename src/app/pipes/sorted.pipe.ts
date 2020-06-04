import { Pipe, PipeTransform } from '@angular/core';
import {RaceChartOptions} from '../models/race-chart-options';

@Pipe({
  name: 'sorted'
})
export class SortedPipe implements PipeTransform {

  transform(value: RaceChartOptions[]): RaceChartOptions {
    return null;
  }

}
