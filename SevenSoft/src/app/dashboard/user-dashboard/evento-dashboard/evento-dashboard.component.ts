import { Component, OnInit, HostBinding } from '@angular/core';
import { EventoService } from '../../../Site/services/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Site/services/users.service';
import { UserSeven } from 'src/app/Site/models/UserSeven';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';
import { Evento } from '../../../Site/models/evento';

// declare const tooltip: any
declare const modal: any

@Component({
  selector: 'app-evento-dashboard',
  templateUrl: './evento-dashboard.component.html',
  styleUrls: ['./evento-dashboard.component.css'],
})

export class EventoDashboardComponent implements OnInit {


  // @HostBinding('class') classes = 'row';
  // evento = {
  //   id_Evento: 0,
  //   nomeEvento: '',
  //   tipoEvento: '',
  //   data: '',
  //   hora: '',
  //   fk_idUserSeven: '',
  // };
  // evento: any = [];

  // evento: any = [
  //   {vetor_eventoById:[]},
  // ];
  public vetor
  // evento: any = [];

  evento: any;
  eventos: any = []

  public user: UserSeven = {};
  // public evento: Evento = {};
  maquinaForm: FormGroup;
  eventoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private eventoService: EventoService,
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {

    // this.evento = {
    //   idEvento: [],
    //   nomeEvento: [],
    //   tipoEvento: [],
    //   dataEvento: [],
    //   horaEvento: [],
    //   fkUserSeven: []
    // };
  }

  // this.evento = {
  //   idEvento: []
  // }

  // nome_evento.forEach((res) => {
  //   this.evento.push(res);
  // })

  // tipo_evento.forEach((res) => {
  //   this.evento.push(res);
  // })

  // data_evento.forEach((res) => {
  //   this.evento.push(res);
  // })

  // hora_evento.forEach((res) => {
  //   this.evento.push(res);
  // })

  // fk_id_UserSeven.forEach((res) => {
  //   this.evento.push(res);
  // })


  ngOnInit() {

    const params = this.activatedRoute.snapshot.params;
    modal();
    // tooltip();
    this.getUserById();
    this.getEventosById()
    // this.getUser(params.id);
    console.log(this.user)
    // for (let i = 0 ; i < this.evento ; i ++){
    //   this.eventoForm2.push();
    // }
    this.maquinaForm = this.formBuilder.group({
      'fk_idusuario': [params.id, Validators.required],
      'fk_idEvento': [null, Validators.required],
      'nome_soft': [null, Validators.required],
    });
    let date = new Date()
    this.eventoForm = this.formBuilder.group({
      'nomeEvento': [null, Validators.required],
      'tipoEvento': [null, Validators.required],
      'data': [date.toLocaleDateString(), Validators.required],
      'hora': [date.toLocaleTimeString(), Validators.required],
      'fk_idUserSeven': [params.id, Validators.required]
    })
  }
  test(i: number) {
    console.log(i);
  }

  // getEventosById() {
  //   const params = this.activatedRoute.snapshot.params;
  //   this.eventoService.getEventoById(params.id).subscribe(
  //     res => {
  //       console.log(res)
  //       // res = this.evento
  //       this.evento = res;
  //     },
  //     err => console.error(err)
  //   );
  // }

  getEventosById() {
    const params = this.activatedRoute.snapshot.params;
    this.eventoService.getAllEventoById(params.id).subscribe(
      res => {
        let allEventoById = res['recordset'].map(res => res);
        let eventoById = res['recordset'].map(res => res.id_Evento);
        let nome_evento = res['recordset'].map(res => res.nomeEvento);
        let tipo_evento = res['recordset'].map(res => res.tipoEvento);
        let data_evento = res['recordset'].map(res => res.data);
        let hora_evento = res['recordset'].map(res => res.hora);
        let fk_id_UserSeven = res['recordset'].map(res => res.fk_idUserSeven);

        allEventoById.forEach((res) => {
          this.eventos.push(res);
        })

        // eventoById.forEach((res) => {
        //   this.evento.idEvento.push(res);
        // })

        // nome_evento.forEach((res) => {
        //   this.evento.nomeEvento.push(res);
        // })

        // tipo_evento.forEach((res) => {
        //   this.evento.tipoEvento.push(res);
        // })

        // data_evento.forEach((res) => {
        //   this.evento.dataEvento.push(res);
        // })

        // hora_evento.forEach((res) => {
        //   this.evento.horaEvento.push(res);
        // })

        // fk_id_UserSeven.forEach((res) => {
        //   this.evento.fkUserSeven.push(res);
        // })

        // eventoById.forEach((res) => {
        //   this.evento.vetor_eventoById.push(res);
        // })
        // nome_evento.forEach((res) => {
        //   this.evento.vetor_nome_evento.push(res);
        // })
        // tipo_evento.forEach((res) => {
        //   this.evento.vetor_tipo_evento.push(res);
        // })
        // data_evento.forEach((res) => {
        //   this.evento.vetor_data_evento.push(res);
        // })
        // hora_evento.forEach((res) => {
        //   this.evento.vetor_hora_evento.push(res);
        // })
        // fk_id_UserSeven.forEach((res) => {
        //   this.evento.vetor_fk_id_UserSeven.push(res);
        // })

      }
    )
  }

  // alldates.forEach((res) => {
  //   let jsdate = new Date(res)
  //   chartDate.push(jsdate.toLocaleTimeString('en', {
  //     hour: 'numeric'
  //   }))
  // })

  // getUser(id: number) {
  //   return this.userService.getUser(id).subscribe(
  //     (user) => {
  //       this.userService.getUser(user)
  //       this.user = (user)
  //       // this.router.navigate(["/dashboard"])
  //       // this.router.navigate([this.returnUrl]);
  //       console.log(this.user)
  //     });
  // }
  getUserById() {
    const params = this.activatedRoute.snapshot.params;
    this.userService.getUser(params.id).subscribe(
      res => {
        this.user = res;
      },
      err => console.error(err)
    );
  }

  cadMaq(formData: NgForm) {
    return this.eventoService.cadMaquina(formData).subscribe(
      (maquina) => {
        if (maquina) {
          console.log(maquina)
          this.eventoService.cadMaquina(maquina);
          if (true) {
            confirm("Maquina cadastrada com sucesso !")
            this.router.navigate(['/evento', this.user.id_usuario])
          }
          // this.router.navigate(['/evento/420']);
          // "['visualizar-evento/', eventos.id_Evento ]"
        }

      },
      err => console.error(err)
    )
  }

  // cadMaq(formData:NgForm){
  //   return this.eventoService.cadMaquina(formData).subscribe(
  //     res =>{
  //       this.router.navigate(['/evento']);
  //     }
  //   )
  // }

  cadEvento(formData: NgForm) {
    console.log(formData)

    return this.eventoService.cadEvento(formData).subscribe(
      (evento) => {
        if (evento) {
          console.log(evento)
          this.eventoService.cadEvento(evento)
          confirm("Evento cadastrado com sucesso !")
          this.router.navigate(['/dashboard', this.user.id_usuario])
          console.log(formData)
        }

      },
      err => console.error(err)
    )
  }

  deletarEvento(id_Evento: string) {
    this.userService.deleteEvento(id_Evento).subscribe(
      res => {
        console.log(res)
        if (true) {
          confirm("Evento deletado com sucesso !")
          this.router.navigate(['/dashboard', this.user.id_usuario])
        }
        //this.getEventosById();
      },
      err => console.log(err)
    )
  }
}
