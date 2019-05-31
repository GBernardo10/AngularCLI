import { Component, OnInit, HostBinding } from '@angular/core';
import { EventoService } from '../../../Site/services/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Site/services/users.service';
import { UserSeven } from 'src/app/Site/models/UserSeven';
import { FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

// declare const tooltip: any
declare const modal: any

@Component({
  selector: 'app-evento-dashboard',
  templateUrl: './evento-dashboard.component.html',
  styleUrls: ['./evento-dashboard.component.css'],
})
export class EventoDashboardComponent implements OnInit {

  // @HostBinding('class') classes = 'row';
  evento: any = [];
  public user: UserSeven = {};

  eventoForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private eventoService: EventoService,
    private userService: UsersService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {    
    const params = this.activatedRoute.snapshot.params;
    modal();
    // tooltip();
    this.getEventosById(params.id);
    this.getUser(params.id);
    console.log(this.user)
    // for (let i = 0 ; i < this.evento ; i ++){
    //   this.eventoForm2.push();
    // }
    this.eventoForm = this.formBuilder.group({
      'id_usuario':[this.user.id_usuario,Validators.required],
      'nome_soft':[null, Validators.required],
    });
  }
  

  getEventosById(id: number) {
    const params = this.activatedRoute.snapshot.params;
    this.eventoService.getAllEventoById(params.id).subscribe(
      res => {
        this.evento = res;
      },
      err => console.error(err)
    );
  }

  getUser(id: number) {
    return this.userService.getUser(id).subscribe(
      (user) => {
        this.userService.getUser(user)
        this.user = (user)
        // this.router.navigate(["/dashboard"])
        // this.router.navigate([this.returnUrl]);
        console.log(this.user)
      });
  }

  cadMaq(formData: NgForm) {
    return this.eventoService.cadMaquina(formData).subscribe(
      (maquina) => {
        if(maquina){
          console.log(maquina)
          this.eventoService.getAllEventoById(maquina)
        }
        
      },
      err => console.error(err)
    )
  }


}
