import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { Maquina } from '../models/maquina';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }

  cadMaquina(formData: NgForm) {
    return this.http.post<any>(`${this.API_URI}/maquina`, formData).pipe(
      tap((maq: Maquina) => {
        maq.nome_soft
      })
    )
  }


  getAllEventoById(id: string | number) {
    return this.http.get(`${this.API_URI}/evento/${id}`);
  }

  // getEventoById(id: string | number) {
  //   return this.http.get(`${this.API_URI}/evento/${id}/eventobyid/${id}`)
  // }
}
