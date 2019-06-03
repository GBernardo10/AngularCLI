import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EventoService } from 'src/app/Site/services/eventos.service';
import { UsersService } from 'src/app/Site/services/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserSeven } from 'src/app/Site/models/UserSeven';

@Component({
  selector: 'app-visualizar-evento',
  templateUrl: './visualizar-evento.component.html',
  styleUrls: ['./visualizar-evento.component.css']
})
export class VisualizarEventoComponent implements OnInit {

  evento = {
    nomeEvento: []
  };

  eventos: any = []
  // evento: any

  public user: UserSeven = {};


  constructor(private formBuilder: FormBuilder,
    private eventoService: EventoService,
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getEventosById();
    console.log(this.eventos)
    console.log(this.evento);
    console.log(this.user)
  }
  getEventosById() {
    const params = this.activatedRoute.snapshot.params;
    this.eventoService.getAllEventoAndMaquinaById(params.id).subscribe(
      res => {
        let allEventoById = res['recordset'].map(res => res);
        let nome_evento = res['recordset'].map(res => res.nomeEvento);
        console.log(nome_evento)

        allEventoById.forEach((res) => {
          this.eventos.push(res);
        })
        // this.evento = nome_evento
        nome_evento.forEach((res) => {
          this.evento.nomeEvento.push(res);
        })

      }
    )
  }

  // getUser(id: number) {
  //   return this.userService.getUser(id).subscribe(
  //     (user) => {
  //       this.userService.getUser(user)
  //       this.user = (user)
  //       this.router.navigate(["/dashboard"])
  //       // this.router.navigate([this.returnUrl]);
  //       console.log(user)
  //     });
  // }

}
