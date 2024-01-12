import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//this service is now singletone service
@Injectable({
  providedIn: 'root'
})
export class FakeserviceService {
  constructor(private httpClient: HttpClient) { }

  fakeservice() {
    return this.httpClient.get('https://fakerapi.it/api/v1/images?_quantity=10&_type=kittens');
  }

}
