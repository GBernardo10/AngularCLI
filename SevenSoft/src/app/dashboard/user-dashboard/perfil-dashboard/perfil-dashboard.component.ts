import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { Router, ActivatedRoute } from '@angular/router';
import { GraficoService } from 'src/app/Site/services/grafico.service';
import { UsersService } from 'src/app/Site/services/users.service';
import { EventoService } from 'src/app/Site/services/eventos.service';


@Component({
  selector: 'app-perfil-dashboard',
  templateUrl: './perfil-dashboard.component.html',
  styleUrls: ['./perfil-dashboard.component.css']
})
export class PerfilDashboardComponent implements OnInit {
  chartTemperaturaCPU: any = [];
  chartMemoriaRam: any = [];
  chartCPU: any = [];
  labelTemMax: any = [];
  labelCPU_Uso: any = [];
  labelCPU_Disponivel: any = [];
  labelRAM_Uso: any = [];
  labelRAm_Disponivel: any = [];

  id: string

  user: any = [];
  hardware: any = [];
  processo: any = [];
  chamados: any = [];

  constructor(private router: Router, private chartjs: GraficoService,
    private usersService: UsersService, private activatedRoute: ActivatedRoute,
    private eventoService: EventoService) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    this.getHardwareById();
    // this.id = localStorage.getItem('token');
    this.chartTempMaxTempMin();
    this.chartUsoMemoriaRam();
    this.chartCPUDisponivelEmUso();
    this.getProcesso();
    this.getTotalChamado();
    console.log(this.labelTemMax);
  }

  getHardwareById() {
    const params = this.activatedRoute.snapshot.params;
    this.usersService.getHardware(params.id).subscribe(
      res => {
        this.hardware = res;
      },
      err => console.error(err)
    );
  }

  getTotalChamado() {
    const params = this.activatedRoute.snapshot.params;
    this.eventoService.getTotalRowsChamado(params.id).subscribe(
      res => {
        this.chamados = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

  getProcesso() {
    const params = this.activatedRoute.snapshot.params;
    this.eventoService.getProcesso(params.id).subscribe(
      res => {
        this.processo = res;
        console.log(res)
      },
      err => console.log(err)
    )
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

        cpu_em_uso.forEach((res) => {
          this.labelCPU_Uso.push(res);
        })

        cpu_disponivel.forEach((res) => {
          this.labelCPU_Disponivel.push(res);
        })

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
              label: 'CPU em uso',
              backgroundColor: '#3cba9f'
            }, {
              data: cpu_disponivel,
              label: 'CPU Disponivel',
              backgroundColor: '#ffcc00'
            }
            ],
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

          let ram_livre = res['recordset'].map(res => res.memoria_ram_disponivel);
          let ram_em_uso = res['recordset'].map(res => res.memoria_ram_em_uso_cpu);

          ram_livre.forEach((res) => {
            this.labelRAm_Disponivel.push(res);
          })

          ram_em_uso.forEach((res) => {
            this.labelRAM_Uso.push(res);
          })

          this.chartMemoriaRam = new Chart('memoriaRam', {
            type: 'pie',
            data: {
              datasets: [{
                data: [
                  ram_livre,
                  ram_em_uso,
                ],
                backgroundColor: [
                  '#3cba9f',
                  '#ffcc00'
                ],
              }],
              labels: [
                'Memoria Ram Disponivel',
                'Memoria Ram Em uso'
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

          temp_max.forEach((res) => {
            this.labelTemMax.push(res);
          })

          alldates.forEach((res) => {
            let jsdate = new Date(res)
            chartDate.push(jsdate.toLocaleTimeString('en', {
              hour: 'numeric'
            }))
          })

          if (chartTempMax.length > 5) {
            temp_max.forEach((res) => {
              chartTempMax.splice(0, 1)
            })
            return
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
