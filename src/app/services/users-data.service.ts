import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  constructor(private http: HttpClient) { }

  getUsuarios() {
    const path = `https://reqres.in/api/users`;
    return this.http.get<any>(path);
  }

}
