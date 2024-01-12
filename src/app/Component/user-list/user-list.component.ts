import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() userList:Array<string> = [];

  @Output() userEventEmt =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  userSelected(selectedUser: string) {
    this.userEventEmt.emit(selectedUser);
  }
}
