import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewdataService {
  HttpClient: any;
  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.HttpClient.get('https://fakerapi.it/api/v1/images?_quantity=10&_type=kittens');
  }
}
