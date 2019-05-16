import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operator/map';
import { User } from '../models/User';
import 'rxjs/add/operator/map'



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string;
  private API_URI = 'http://localhost:3000/api';


  constructor(private http: HttpClient) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }
  public user: Login[] = [];


  // login(username: string, password: string): Observable<void> {
  //   return this.http.post<void>(this.API_URI, { username: username, password: password }).pipe(
  //     map(user => {
  //       if (user && user.token) {
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //       }
  //       return user;
  //     })
  //   );

  // }



  login(username: string, password: string): Observable<boolean> {
    let body = JSON.stringify({ username: username, password: password });
    return this.http.post(this.API_URI, body).map((response: Response) => {
      let token = response.json() && response.json().token;
      if (token) {
        this.token = token;
        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
        return true
      }
    })

  }

  // entrar(login: Login) {
  //   return this.http.post(`${this.API_URI}/login/`, login);
  // }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
  }
}
