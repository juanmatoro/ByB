import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl = 'http://localhost:4500/user'; // Ajusta esta URL según sea necesario

  constructor(private http: HttpClient) {}

  // Método para registrar un nuevo usuario
  register(user: User): Observable<User> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<User>(`${this.baseUrl}/register`, user, { headers });
  }

  // Método para iniciar sesión
  login(user: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.baseUrl}/login`, user, { headers });
  }

  // Método para verificar la sesión
  checksession(token: string | null): Observable<any> {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.http.get<any>(`${this.baseUrl}/checksession`, { headers });
  }
}
