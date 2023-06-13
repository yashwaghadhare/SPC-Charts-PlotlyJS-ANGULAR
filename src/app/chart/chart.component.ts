import { Component, OnInit } from '@angular/core';
declare const Plotly: any;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  ngOnInit() {
    const Data = {
      type: 'scatter',
      x: [1,2,3,4,5,6,7,8,9],
      y: [4,2,-1,4,-5,-7,0,3,8],
      mode: 'lines+markers',
      name: 'Data',
      showlegend: true,
      hoverinfo: 'all',
      line: {
        color: 'blue',
        width: 2
      },
      marker: {
        color: 'blue',
        size: 8,
        symbol: 'circle'
      }
    };

    const Viol = {
      type: 'scatter',
      x: [6,9,7,8],
      y: [-7,8,0,3],
      mode: 'markers',
      name: 'Violation',
      showlegend: true,
      marker: {
        color: 'rgb(255,65,54)',
        line: {width: 3},
        opacity: 0.5,
        size: 12,
        symbol: 'circle-open'
      }
    };

    const CL = {
      type: 'scatter',
      x: [0.5, 10, null, 0.5, 10],
      y: [-5, -5, null, 5, 5],
      mode: 'lines',
      name: 'LCL/UCL',
      showlegend: true,
      line: {
        color: 'red',
        width: 2,
        dash: 'dash'
      }
    };

    const Centre = {
      type: 'scatter',
      x: [0.5, 10],
      y: [0, 0],
      mode: 'lines',
      name: 'Centre',
      showlegend: true,
      line: {
        color: 'grey',
        width: 2
      }
    };

    const data = [Data, Viol, CL, Centre];

    const layout = {
      // title: 'Basic SPC Chart',
      xaxis: {
        zeroline: false
      },
      yaxis: {
        range: [-10,10],
        zeroline: false
      }
    };

    Plotly.newPlot('myPlot', data, layout);
  }
}
