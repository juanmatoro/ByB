import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoutinesService {

  private baseUrl = 'http://localhost:4500/routine';


  constructor(private http: HttpClient) {}

  createRoutine(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/routine`, user);
  }


  getRoutines(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getRoutines`);
  }

  
  deleteRoutine(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteRoutine`);
  }

}