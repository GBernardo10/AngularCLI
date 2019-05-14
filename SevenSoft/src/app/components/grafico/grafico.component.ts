import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../../services/grafico.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {
  chart = [];

  constructor(private chartjs: GraficoService) { }

  ngOnInit() {
    this.chartjs.dailyForecast().subscribe(
      res => {
        let temp_max = res['list'].map(res => res.main.temp_max)
        let temp_min = res['list'].map(res => res.main.temp_min)
        let alldates = res['list'].map(res => res.dt)



        let chartDate = []
        alldates.forEach((res) => {
          let jsdate = new Date(res * 1000)
          chartDate.push(jsdate.toLocaleTimeString('en', {
            year: 'numeric', month: 'short', day: 'numeric'
          }))
        })
        this.chart = new Chart('canvas', {
          type:'line',
          data:{
            labels:chartDate, 
            datasets:[
              {
                data:temp_max,
                borderColor:'#3cba9f',
                fill:false
              },
              {
                data:temp_min,
                borderColor:'#ffcc00',
                fill:false
              },
            ]
          },
          options:{
            legend:{
              display:false
            },
            scales:{
              xAxes:[{
                display:true
              }],
              yAxes:[{
                display:true
              }]
            }
          }
        })
        console.log(chartDate)

        console.log(res)
      },
      err => {
        console.log(err)
      }
    );
  }
  // ngOnInit(){
  //   this.dailyForecast();
  // }
  // dailyForecast(){
  //   this.chartjs.dailyForecast().subscribe(
  //     res =>{
  //       console.log(res)
  //     }
  //   )
  // }
  // this.chartjs.dailyForecast().subscribe(res => {
  //   let temp_max = res['list'].map(res => res.main.temp_max)
  //   let temp_min = res['list'].map(res => res.main.temp_min)
  //   let alldates = res['list'].map(res => res.dt)


  //   let testeDate = []
  //   alldates.forEach((res => {
  //     let jsdate = new Date(res * 1000)
  //     testeDate.push(jsdate.toLocaleTimeString('en', {
  //       year: 'numeric', month: 'short', day: 'numeric'
  //     }))

  //   }))
  //   console.log(res)
  // })
}
  // ngOnInit(){
  //   this.dailyForecast();
  // }
  // dailyForecast(){
  //   this.chartjs.dailyForecast().subscribe(
  //     res =>{
  //       console.log(res)
  //     }
  //   )
  // }

  // ngOnInit() {
  //   this.chartjs.dailyForecast().subscribe(
  //     res =>{
  //       console.log(res)
  //     }
  //   )
  // }


