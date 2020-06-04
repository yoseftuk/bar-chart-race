import { Component } from '@angular/core';
import {RaceChartOptions} from './models/race-chart-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  chartOptions: RaceChartOptions[] = [
    {
      label: 'USA',
      thumbUrl: 'assets/img/flag-uk.png',
      category: 'america',
      data: [
        2e6, 1.5e6, 1e6, 6e6, 7.6392e7, 2.82e8
      ]
    },
    {
      label: 'France',
      thumbUrl: 'assets/img/flag-france.webp',
      category: 'europe',
      data: [
        1.5e7, 1.85e7, 2.1471e7, 2.9e7, 4.0598e7, 6.1137e7
      ]
    },
    {
      label: 'Japan',
      thumbUrl: 'assets/img/flag-jp.png',
      category: 'asia',
      data: [
        1.54e7, 1.85e7, 2.7e7, 2.8e7, 4.4103e7, 1.26e8
      ]
    },
    {
      label: 'Germany',
      thumbUrl: 'assets/img/flag-gr.jpg',
      category: 'europe',
      data: [
        1.2e7, 1.6e7, 1.5e7, 1.8e7, 5.4388e7, 82187909
      ]
    },
    {
      label: 'Iran',
      thumbUrl: 'assets/img/flag-ir.webp',
      category: 'asia',
      data: [
        4e6, 5e6, 5e6, 6e6, 1e7, 6.3273e7
      ]
    },
    {
      label: 'UK',
      thumbUrl: 'assets/img/flag-uk.png',
      category: 'europe',
      data: [
        3.942e6, 6.17e6, 8.565e6, 1.075e7, 4.1155e7, 59522468
      ]
    },
    {
      label: 'Egypt',
      thumbUrl: 'assets/img/flag-egypt.png',
      category: 'africa',
      data: [
        4e6, 5e6, 4.5e6, 3.5e6, 10176306, 7.0512e7
      ]
    },
  ];
  categories = {
    europe: '#88BB64',
    asia: '#F0BA2E',
    africa: '#A45384',
    america: '#6e9aa4'
  };
}
