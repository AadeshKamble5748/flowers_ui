import { Component, OnInit } from '@angular/core';
import { NewdataService } from 'src/app/Services/newdata.service';

@Component({
  selector: 'app-worldofflower',
  templateUrl: './worldofflower.component.html',
  styleUrls: ['./worldofflower.component.scss'],
})
export class WorldofflowerComponent implements OnInit {
  data: any;
  flowerList = [
    { "Name": "Jarbera", "Model": "JB01", "Fresh": true },
    { "Name": "Jarbera", "Model": "JB01", "Fresh": true },
    { "Name": "Jarbera", "Model": "JB01", "Fresh": true },
    { "Name": "Jarbera", "Model": "JB01", "Fresh": true },
    { "Name": "Jarbera", "Model": "JB01", "Fresh": true },
    { "Name": "Jarbera", "Model": "JB01", "Fresh": true },  
  ];
  constructor(private newdataservice: NewdataService) { }

  ngOnInit(): void {
    this.getNewData();
  }
getFlowerList(){

}
  getNewData() {
    return this.newdataservice.getData().subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
    });
  }

}
