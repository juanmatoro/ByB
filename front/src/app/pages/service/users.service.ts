import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl: string = 'http://localhost:4500/users';

  public libroData = {
    id: '',
    autor: '',
    portada: '',
    titulo: '',
    year: 1970,
  };

    constructor(private http: HttpClient) { }
    

}
