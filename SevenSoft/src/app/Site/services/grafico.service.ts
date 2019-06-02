import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private httpHandler: HttpHandler) { }


  getAllDados(id: string | number) {
    return this.http.get(`${this.API_URI}/grafico/${id}`).map(result => result);
  }

  // getIdDado(id: string) {
  //   return this.http.get(`${this.API_URI}/grafico/${id}`).map(result => result);
  // }

}
