import { Component, OnInit, Input } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'ss-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  @Input('ProgressValue') ProgressValue: Number;

  @Input('progressType') progressType:string;

  bgColor:string;
  

  constructor() {
    
    
    

  }

  ngOnInit() {
    if(!this.ProgressValue){
      this.ProgressValue=0;
    }

    console.log(this.ProgressValue);
    
    if(!this.progressType) {
      this.bgColor = '';
    }else {
      this.bgColor = this.progressType;
    }

  }

}
