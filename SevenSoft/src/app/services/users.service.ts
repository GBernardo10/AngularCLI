import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }


  getUsers(){
    return this.http.get(`${this.API_URI}/user`);
  }

  getUser(userId: string){
    return this.http.get(`${this.API_URI}/user/${userId}`);
  }

  deleteUser(userId:string){
    return this.http.delete(`${this.API_URI}/user/${userId}`);
  }

  saveUser(user: User){
    return this.http.post(`${this.API_URI}/user`, user);
  }

  updateUser(userId: string, updatedUser: User): Observable<User>{
    return this.http.put(`${this.API_URI}/user/${userId}`, updatedUser);

  }

}
