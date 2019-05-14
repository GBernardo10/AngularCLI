import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor(private _http:HttpClient,private httpHandler:HttpHandler) { }

  dailyForecast(){
    return this._http.get("https://cors-anywhere.herokuapp.com/http://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22",).map(result=>result);
  }
}
