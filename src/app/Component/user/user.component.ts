import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private UserService: UserService) { }

  empId: any;
  empName: any;
  dept: any;

  users = ['Aadesh','Atul','Raj'];

  // userList = [{ empId: "1", empName: "Aadesh", dept: "Admin" }, 
  // { empId: "2", empName: "Atul", dept: "Genral" }, 
  // { empId: "3", empName: "Raj", dept: "User" }];

  ngOnInit(): void {
    //this.userDetails;
  }
  //parent-child
  selectedUserToWork(user: string) {
    debugger;
    alert(user);
  }

  // userDetails() {
  //   this.UserService.getUser().subscribe((res: any) => {
  //     //this.userList = data;
  //   });
  // }
}
