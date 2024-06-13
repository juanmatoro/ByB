import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl = 'http://localhost:4500/user';


  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/register`, user);
  }


  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  
  checksession(token: string | null): Observable<any> {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any>(`${this.baseUrl}/checksession`, { headers });
  }

  getuserbyid(id:any, token: string | null){
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers }; // Objeto de opciones con los encabezados
    return this.http.get<any>(`${this.baseUrl}/user`, options);
  }

}