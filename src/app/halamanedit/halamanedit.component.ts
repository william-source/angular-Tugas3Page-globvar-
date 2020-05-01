import {ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router'
import { Component, OnInit } from '@angular/core';
import { GlobSerService } from '../glob-ser.service';
@Component({
  selector: 'app-halamanedit',
  templateUrl: './halamanedit.component.html',
  styleUrls: ['./halamanedit.component.css']
})
export class HalamaneditComponent implements OnInit {
  id : number;
  najur_edit='';
  penjur_edit='';
  datadariglob : any;
  
  
  
  constructor(private route :ActivatedRoute,private router:Router,public variabelglobal : GlobSerService){
    this.datadariglob = this.variabelglobal.getData();
  }

  ngOnInit() {
  this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  this.najur_edit=this.datadariglob[this.id].namajurusan;
  this.penjur_edit=this.datadariglob[this.id].penjelasanjurusan;
  }

  Edit(){;
    this.datadariglob[this.id].penjelasanjurusan=this.penjur_edit;
    this.variabelglobal.updateData(this.datadariglob);
    this.datadariglob=this.variabelglobal.getData();
    this.router.navigate(['/halamanlist']);
  }
  


}