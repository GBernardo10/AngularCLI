import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../../services/grafico.service';
import { Chart } from 'chart.js';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs-compat/operator/map';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  chart: any = [];

  constructor(private chartjs: GraficoService) { }

  ngOnInit() {
    setInterval(this.chart, 3000)
    this.chartjs.getAllDados().subscribe(
      res => {
        let temp_max = res['recordset'].map(res => res.tempMax);
        let temp_min = res['recordset'].map(res => res.tempMin);
        let alldates = res['recordset'].map(res => res.hora);

        let chartDate = []
        console.log(chartDate)
        alldates.forEach((res) => {
          let jsdate = new Date(res)
          chartDate.push(jsdate.toLocaleTimeString('en', {
            hour: 'numeric'
          }))
        })
        this.chart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: chartDate,
            datasets: [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true
              }]
            }
          }
        })
        console.log(temp_max)

        console.log(res)
      },
      err => {
        console.log(err)
      }
    );
  }
}

