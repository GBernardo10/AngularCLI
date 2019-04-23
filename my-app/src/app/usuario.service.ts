import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from './carregar-usuario';
import { map } from 'rxjs/operators';

@Injectable()


export class UsuarioService {


  constructor(private _http : Http) { }
  
}
