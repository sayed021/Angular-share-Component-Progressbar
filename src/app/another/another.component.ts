import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
  constructor() { }
  isRotate:boolean=false;
  ngOnInit() { }
  changeRotate() {
    this.isRotate= this.isRotate ? false:true;
  }
}
