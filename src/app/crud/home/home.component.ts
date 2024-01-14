import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any = [];

  constructor(public crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data: any) => {
      console.log(data);
      this.products = data;
    })
  }
}
