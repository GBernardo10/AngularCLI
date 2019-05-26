import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from '../../models/User';
import { Login } from '../../models/login';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api';

  //private isloggedIn: boolean;

  constructor(private http: HttpClient, private router: Router) { }

  log(msg: any) {
    console.log(new Date() + ": "
      + JSON.stringify(msg));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);

      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  // cadastro(data): Observable<User> {
  //   return this.http.post<User>(`${this.API_URI}/user`, data).pipe(
  //     tap((user: User) => {
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       this.log(`Adicionado um novo usuario com o id=${user.userId}`)
  //     }),
  //     catchError(this.handleError<User>('cadastro'))
  //   );
  // }

  // login(data): Observable<User> {
  //   return this.http.post<any>(`${this.API_URI}/login`, data).pipe(
  //     tap((login: Login) => {
  //       if (login && login.token) {
  //         localStorage.setItem('currentUser', JSON.stringify(login));
  //         this.isloggedIn = true;
  //       }
  //       this.log(`Entrou com o usuario=${login.username}`)
  //     }),
  //     catchError(this.handleError<User>('login'))
  //   );
  // }

  // cadastro(formData: NgForm): Observable<User> {
  //   return this.http.post<User>(`${this.API_URI}/user`, formData).pipe(
  //     tap(user => {
  //       console.log(user)
  //       this.log(`Adicionado um novo usuario com o id=${user.userId}`)
  //     }),
  //     catchError(this.handleError<User>('cadastro'))
  //   );
  // }

  cadastro(formData: NgForm): Observable<User> {
    return this.http.post<User>(`${this.API_URI}/user`, formData).pipe(
      tap((user: User) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.log(`Adicionado um novo usuario com o id=${user.userId}`)
      }),
      catchError(this.handleError<User>('cadastro'))
    );
  }


  login(formData: NgForm): Observable<User> {
    return this.http.post<any>(`${this.API_URI}/login`, formData).pipe(
      tap((login: Login) => {
        localStorage.setItem('currentUser', JSON.stringify(login));
        this.log(`Entrou com o usuario=${login.username}`)
      }),
      catchError(this.handleError<User>('login'))
    );
  }

  logout() {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/home']);
    }

  }

  isloggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }


  getUserLoggedIn() {
    if (this.isloggedIn) {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
  }





  getUsers() {
    return this.http.get(`${this.API_URI}/user`);
  }

  getUser(id: string) {
    console.log(id)
    return this.http.get<any>(`${this.API_URI}/user/${id}`);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_URI}/user/${id}`);
  }

  saveUser(user: User) {
    return this.http.post(`${this.API_URI}/user`, user);
  }

  updateUser(id: string | number, updatedUser: User): Observable<any> {
    //console.log(updatedUser)
    return this.http.put(`${this.API_URI}/user/${id}`, updatedUser);
  }

}
