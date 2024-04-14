import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Providers } from '../models/Providers';

@Injectable()
export class ProvidersService {
  API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getProviders() {
    return this.http.get(`${this.API_URL}/providers`);
  }

  addProviders(provider: Providers) {
    return this.http.post(`${this.API_URL}/addProvider`, provider);
  }
}
