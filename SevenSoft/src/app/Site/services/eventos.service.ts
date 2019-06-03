import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { Maquina } from '../models/maquina';
import { Evento } from '../models/evento';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }

  cadMaquina(formData: NgForm) {
    console.log(formData)
    return this.http.post<any>(`${this.API_URI}/maquina`, formData);
  }


  cadEvento(formData: NgForm) {
    console.log(formData)
    return this.http.post<any>(`${this.API_URI}/evento`, formData);
  }

  cadChamado(formData: NgForm) {
    return this.http.post<any>(`${this.API_URI}/chamado`, formData);
  }

  getProcesso(id: string | number) {
    return this.http.get<any>(`${this.API_URI}/processo/${id}`)
  }

  getTotalRowsChamado(id: string | number) {
    return this.http.get<any>(`${this.API_URI}/chamado/${id}/total/${id}`)
  }

  getAllEventoById(id: Evento) {
    return this.http.get<any>(`${this.API_URI}/evento/${id}`);
  }

  getAllEventoAndMaquinaById(id: string | number) {
    return this.http.get<any>(`${this.API_URI}/evento/${id}/eventosByMaquinaId/${id}`).map(result => result);
  }

  // getEventoById(id: string | number) {
  //   return this.http.get(`${this.API_URI}/evento/${id}/eventobyid/${id}`)
  // }
}
