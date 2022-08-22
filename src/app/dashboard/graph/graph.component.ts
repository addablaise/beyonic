import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public chart: any = {
    type: ChartType.LineChart,
    options: {
      tooltip: { isHtml: true },
      curveType: 'function',
      legend: 'none',
      backgroundColor: 'transparent',
      vAxis: {
        gridlines: {
          color: 'transparent'
        },
        ticks: [0, 25000, 50000, 75000, 100000],
        format: 'short'
      },
      hAxis: {
        gridlines: {
          color: 'transparent'
        },
      },
      colors: ["#006FAB"]
    },
    columns: ['Date', 'Amount'],
    data: [
      ['1 Apr',  50000],
      ['',  70000],
      ['7 Apr',  25000],
      ['',  70000],
      ['14 Apr',  75000],
      ['',  80000],
      ['',  70000],
      ['21 Apr', 90000],
      ['',  70000],
      ['28 Apr',  100000],
    ]
  };
}
