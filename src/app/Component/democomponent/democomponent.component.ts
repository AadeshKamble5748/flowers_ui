import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.scss']
})
export class DemocomponentComponent implements OnInit {
  demoForm!: FormGroup;
  isAdded:boolean = false;
  title: string = 'Aadesh First Angular APP';

  
  constructor() {
    this.demoForm = new FormGroup({
      userName: new FormControl('')
    });
   }

  ngOnInit(): void {
  }

  addHobby(){
    this.isAdded = !this.isAdded
  }

  onSubmit() {
    console.log(this.demoForm.value);
  }
}
