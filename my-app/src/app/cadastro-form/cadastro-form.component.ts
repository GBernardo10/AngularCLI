import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro';

@Component({
  selector: 'app-cadastro-form',
  templateUrl: './cadastro-form.component.html',
  styleUrls: ['./cadastro-form.component.css']
})
export class CadastroFormComponent {
  idOrganizadora = [1];
  name = ['Guilherme'];
  cnpj = ['1234567890'];
  username = ['teste'];
  senha = ['senha123'];

  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.name); }
}
