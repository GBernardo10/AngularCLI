import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { GraficoService } from 'src/app/Site/services/grafico.service';
import { UsersService } from 'src/app/Site/services/users.service';


@Component({
  selector: 'app-perfil-dashboard',
  templateUrl: './perfil-dashboard.component.html',
  styleUrls: ['./perfil-dashboard.component.css']
})
export class PerfilDashboardComponent implements OnInit {
  chartTemperaturaCPU: any = [];
  chartMemoriaRam: any = [];
  chartCPU: any = [];

  id: string

  user: any = [];
  hardware: any = []

  constructor(private router: Router, private chartjs: GraficoService,
    private usersService: UsersService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.getUser();
    // this.id = localStorage.getItem('token');
    this.chartTempMaxTempMin();
    this.chartUsoMemoriaRam();
    this.chartCPUDisponivelEmUso();
  }

  getUser() {
    this.usersService.getHardware().subscribe(
      res => {
        this.hardware = res;
      },
      err => console.error(err)
    );
  }

  chartCPUDisponivelEmUso() {
    const params = this.activatedRoute.snapshot.params;
    let chart_cpu_em_Uso: any = [];
    let chart_cpu_disponivel: any = [];
    let chartDate: any = [];

    this.chartjs.getAllDados(params.id).subscribe(
      res => {
        let cpu_em_uso = res['recordset'].map(res => res.cpu_em_uso);
        let cpu_disponivel = res['recordset'].map(res => res.cpu_disponivel);
        let dataHora = res['recordset'].map(res => res.data_hora);

        dataHora.forEach((res) => {
          let jsdate = new Date(res)
          chartDate.push(jsdate.toLocaleTimeString('en', {
            hour: 'numeric'
          }))
        })

        this.chartCPU = new Chart('cpu', {
          type: 'bar',
          data: {
            labels: chartDate,
            datasets: [{
              data: cpu_em_uso,
              backgroundColor: '#3cba9f'
            }, {
              data: cpu_disponivel,
              backgroundColor: '#ffcc00'
            }
            ]

          },
          options: {
            legend: {
              display: false
            }
          }
        })
      }
    )
  }

  chartUsoMemoriaRam() {
    const params = this.activatedRoute.snapshot.params;
    let chartTempMax: any = [];
    let chartTempMin: any = [];

    setTimeout(() => {
      this.chartjs.getAllDados(params.id).subscribe(
        res => {

          let temp_max = res['recordset'].map(res => res.memoria_ram_disponivel);
          let temp_min = res['recordset'].map(res => res.memoria_ram_em_uso_cpu);

          // temp_max.forEach((res) => {
          //   chartTempMax.push(res);
          // })

          // temp_min.forEach((res) => {
          //   chartTempMin.push(res);
          // })

          this.chartMemoriaRam = new Chart('memoriaRam', {
            type: 'pie',
            data: {
              datasets: [{
                data: [
                  temp_max,
                  temp_min,
                ],
                backgroundColor: [
                  '#3cba9f',
                  '#ffcc00'
                ],
              }],
              labels: [
                'Em uso',
                'Livre'
              ]
            },
            options: {
              responsive: true,
              legend: {
                display: false
              },
            }
          })
        },
        err => {
          console.log(err)
        }
      );
    }, 200);
  }

  chartTempMaxTempMin() {
    const params = this.activatedRoute.snapshot.params;

    let chartTempMax = [];
    let chartDate = [];
    // let chartTempMin = [];
    console.log(chartTempMax)

    setInterval(() => {
      this.chartjs.getAllDados(params.id).subscribe(
        res => {
          let temp_max = res['recordset'].map(res => res.temperatura_cpu);
          // let temp_min = res['recordset'].map(res => res.tempMin);
          let alldates = res['recordset'].map(res => res.data_hora);

          temp_max.forEach((res) => {
            chartTempMax.push(res);
          })

          // temp_min.forEach((res) => {
          //   chartTempMin.push(res);
          // })

          alldates.forEach((res) => {
            let jsdate = new Date(res)
            chartDate.push(jsdate.toLocaleTimeString('en', {
              hour: 'numeric'
            }))
          })

          if (chartTempMax.length > 20) {
            chartTempMax.splice(0, 1)
          }

          // if (chartTempMin.length > 20) {
          //   chartTempMin.splice(0, 1)
          // }

          this.chartTemperaturaCPU = new Chart('canvas', {
            type: 'line',
            data: {
              labels: chartDate,
              datasets: [
                {
                  data: chartTempMax,
                  borderColor: '#3cba9f',
                  fill: false
                }
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
        },
        err => {
          console.log(err)
        }
      );
    }, 10000)

  }

}
