import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  logIn(user : User) : Observable<any>{
    return this.http.post('https://utn2019-avanzada2-tp9.herokuapp.com/login',user);
  }
}
