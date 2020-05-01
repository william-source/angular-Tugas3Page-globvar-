import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GlobSerService } from '../glob-ser.service';
@Component({
  selector: 'app-halamaninput',
  templateUrl: './halamaninput.component.html',
  styleUrls: ['./halamaninput.component.css']
})
export class HalamaninputComponent implements OnInit {

  najur ='';
  penjur ='';
  constructor(private route:ActivatedRoute,public variabelglobal:GlobSerService){
   }

  addData(){
    if(this.najur!=''&&this.penjur!=''){
    this.variabelglobal.addData(this.najur,this.penjur);
    this.najur='';
    this.penjur='';
    }
  }

  ngOnInit() {
  }

}