import {Component, Input, OnInit} from '@angular/core';
import {RaceChartOptions} from '../../models/race-chart-options';

@Component({
  selector: 'app-race-chart',
  templateUrl: './race-chart.component.html',
  styleUrls: ['./race-chart.component.scss']
})
export class RaceChartComponent implements OnInit {

  @Input('fromYear') fromYear: number;
  @Input('yearInterval') yearInterval: number = 1;
  @Input('duration') duration: number;
  @Input('categories') categories: {};
  @Input('data') data: RaceChartOptions[];
  svgHeight: number = 400;
  svgWidth: number = 600;
  legendsHeight = 20;
  legendRectWidth = 5;
  legendSpace = 50;
  legendTopPadding = 5;
  pieceHeight: number = 20;
  pieceSpace: number = 5;
  rectRightMargin: number = 70;
  thumbSpace: number = 2;
  labelWidth: number = 60;
  labelSpace: number = 5;
  svgPaddingBottom: number = 100;
  isAnimated = true;
  currentIndex = 0;
  position = 0;
  lastTime = 0;

  constructor() { }

  ngOnInit() {
    this.svgHeight = this.data.length * (this.pieceHeight + this.pieceSpace) + this.legendsHeight + 55;
    this.data.forEach(t => t.count = t.data[0]);
    new Date().getTime();
    this.sort(this.data);
    this.animate();
  }
  thumbHeight(): number {
    return this.pieceHeight - this.thumbSpace * 2;
  }
  thumbRadius(): number {
    return this.thumbHeight() / 2;
  }
  rectStart(): number {
    return this.labelWidth + this.labelSpace;
  }
  y(i): number {
    return i * (this.pieceHeight + this.pieceSpace) + this.legendsHeight;
  }
  sort(data) {
    const d = [...data].sort((a, b) => a.count <= b.count ? 1 : -1);
    data.forEach(t => t.order = d.indexOf(t));
  }
  rectWidth(count): number {
    return parseInt(
      (this.svgWidth - this.labelWidth - this.labelSpace - this.rectRightMargin) *
      (count / Math.max(...this.data.map(t => t.count))) + '', 10);
  }
  linePos(): number {
    const x1 = this.rectStart();
    const x2 = this.svgWidth - this.rectRightMargin;
    const d = x2 - x1;
    const interval = d / (this.data[0].data.length - 1);
    return x1 + this.currentIndex * interval + this.position * interval;
  }
  xLabelPos(i): number {
    const x1 = this.rectStart();
    const x2 = this.svgWidth - this.rectRightMargin;
    const d = x2 - x1;
    const interval = d / (this.data[0].data.length - 1);
    return x1 + i * interval;
  }
  total(): number {
    return this.data.reduce((a, b) => a + b.count, 0);
  }

  animate(deltaTime = 0) {
    this.lastTime = new Date().getTime();
    if (!this || !this.isAnimated) { return; }
    this.position += deltaTime / this.duration;
    if (this.position >= 1) {
      this.position = 0;
      this.currentIndex = (this.currentIndex + 1) % (this.data[0].data.length - 1);
    }
    this.data.forEach(t =>
      t.count = t.data[this.currentIndex] +
        (t.data[this.currentIndex + 1] - t.data[this.currentIndex]) * this.position);
    this.sort(this.data);
    requestAnimationFrame(() => this.animate(new Date().getTime() - this.lastTime));
  }

}
