import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/Site/services/eventos.service';
import { getLocaleDateTimeFormat } from '@angular/common';


@Component({
  selector: 'app-chamados-dashboard',
  templateUrl: './chamados-dashboard.component.html',
  styleUrls: ['./chamados-dashboard.component.css']
})
export class ChamadosDashboardComponent implements OnInit {

  chamadoForm: FormGroup;

  constructor(private fb: FormBuilder, private eventoService: EventoService,
    private router: Router,
  ) {
    // this.createForm();
  }

  cadChamado(formData: NgForm) {
    return this.eventoService.cadChamado(formData).subscribe(
      (chamado) => {
        if (chamado) {
          this.eventoService.cadChamado(chamado)
          confirm('Chamado Registrado')
        }
      },
      err => console.log(err)
    )
  }
  ngOnInit() {
    let date = new Date()
    this.chamadoForm = this.fb.group({
      'data': [date.toLocaleDateString(), Validators.required],
      'hora': [date.toLocaleTimeString(), Validators.required],
      'descricao': [null, Validators.required],
      'criticidade': [null, Validators.required],
      'onde_ocorreu': [null, Validators.required],
      'fk_idSoft': [null, Validators.required]
    });
    console.log(this.chamadoForm)
  }

}
