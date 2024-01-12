import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getUser() {
    return this.httpClient.get('https://fakerapi.it/api/v1/images?_quantity=10&_type=kittens');
  }
}
