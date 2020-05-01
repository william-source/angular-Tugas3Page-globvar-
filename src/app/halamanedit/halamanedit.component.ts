import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';
@Component({
  selector: 'app-halamanedit',
  templateUrl: './halamanedit.component.html',
  styleUrls: ['./halamanedit.component.css']
})
export class HalamaneditComponent implements OnInit {

  datadariglob : any;
  datatemp :any;
  dataupdate :any;
  najur='';
  penjur=''
  constructor(private route :ActivatedRoute,public variabelglobal:GlobSerService){
    this.datadariglob = this.variabelglobal.getData();
    this.datatemp = this.datadariglob;    
   }

   updateData(){
     if(this.najur!=''&&this.penjur!=''){
       this.dataupdate ={
         namajurusan : this.najur,
         penjelasanjurusan : this.penjur
       }
       this.variabelglobal.updateData(this.dataupdate,this.najur);
       this.datadariglob = this.variabelglobal.getData();
       this.najur='';
       this.penjur='';
     }
   }

  ngOnInit() {
  }

}