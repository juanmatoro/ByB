import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Routine } from '../models/routine';


@Injectable({
  providedIn: 'root',
})
export class RoutinesService {

  private baseUrl = 'http://localhost:4500/routine';

  public routineData = {
    _id: '',
    name: '',
    date: '',
    comment: '',
    owner: "",
    exercise: [],
  };

  constructor(private http: HttpClient) {}


  createRoutine(newRoutine: Routine, token: string | null  ) {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers }; // Objeto de opciones con los encabezados
    return this.http.post(`${this.baseUrl}/createroutine`, newRoutine, options);
  }

  getRoutines(token: string | null): Observable<{ data: Routine[] }> {
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    const options = { headers: headers };
    return this.http.get<{ data: Routine[] }>(`${this.baseUrl}/getRoutines`, options);
  }

  
  deleteRoutine(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteRoutine`);
  }


  clearData() {
     this.routineData = {
      _id: '',
      name: '',
      date: '',
      comment: '',
      owner: "",
      exercise: [],
    };
  }
}