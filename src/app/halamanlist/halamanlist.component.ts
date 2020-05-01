import { Component, OnInit } from '@angular/core';
import {GlobSerService} from '../glob-ser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-halamanlist',
  templateUrl: './halamanlist.component.html',
  styleUrls: ['./halamanlist.component.css']
})
export class HalamanlistComponent implements OnInit {

  first=2
  datadariglob : any;
  constructor(public variabelglobal:GlobSerService,private router: Router){
    this.datadariglob = this.variabelglobal.getData();
   }

  Edit(id){
       this.router.navigate(['/halamanedit',id]); 
  }
  ngOnInit() {
  }

}