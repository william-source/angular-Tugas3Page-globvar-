import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { GlobSerService } from '../glob-ser.service';
@Component({
  selector: 'app-halamaninput',
  templateUrl: './halamaninput.component.html',
  styleUrls: ['./halamaninput.component.css']
})
export class HalamaninputComponent implements OnInit {

  datadariglob : any;
  datatemp : any;
  datatambah : any;
  najur ='';
  penjur ='';
  constructor(private route:ActivatedRoute,public variabelglobal:GlobSerService){
    this.datadariglob  = this.variabelglobal.getData();
    this.datatemp = this.datadariglob;
   }

  addData(){
    if(this.najur!=''&&this.penjur!=''){
        this.datatambah ={
      namajurusan : this.najur,
      penjelasanjurusan : this.penjur
    }
    this.datatemp.push(this.datatambah);
    this.variabelglobal.setData(this.datatemp);
    this.datadariglob=this.variabelglobal.getData();
    this.najur='';
    this.penjur='';
    }
  }

  ngOnInit() {
  }

}