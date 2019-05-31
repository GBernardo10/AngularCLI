import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }

  getAllEventoById() {
    return this.http.get(`${this.API_URI}/evento`);
  }
}
