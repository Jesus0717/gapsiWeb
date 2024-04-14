import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.API_URL}/users`);
  }
}
