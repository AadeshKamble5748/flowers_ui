import { Component, OnInit } from '@angular/core';
import { FakeserviceService } from 'src/app/Services/FakeserviceService.service';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.scss']
})
export class AdminlistComponent implements OnInit {
  userList: any;

  constructor(private fakeserviceService:FakeserviceService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.fakeserviceService.subscribe((data:any)=> {
      this.userList = data
      console.table(data);
    })
  }
}
