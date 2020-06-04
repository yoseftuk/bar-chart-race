import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceChartComponent } from './race-chart.component';

describe('RaceChartComponent', () => {
  let component: RaceChartComponent;
  let fixture: ComponentFixture<RaceChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
