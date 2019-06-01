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
  evento: any = [];
  public user: UserSeven = {};
  // public evento: Evento = {};
  eventoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private eventoService: EventoService,
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.evento.id_Evento)
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
    this.eventoForm = this.formBuilder.group({
      'fk_idusuario': [params.id, Validators.required],
      'id_Evento': [this.evento.id_Evento, Validators.required],
      'nome_soft': [null, Validators.required],
    });
  }

  getEventosById() {
    const params = this.activatedRoute.snapshot.params;
    this.eventoService.getEventoById(params.id).subscribe(
      res => {
        console.log(res)
        res = this.evento
        // this.evento = res;
      },
      err => console.error(err)
    );
  }

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
          this.eventoService.cadMaquina(maquina)
        }

      },
      err => console.error(err)
    )
  }


}
