import { Component, OnInit } from '@angular/core';
import {GlobSerService} from '../glob-ser.service';

@Component({
  selector: 'app-halamanlist',
  templateUrl: './halamanlist.component.html',
  styleUrls: ['./halamanlist.component.css']
})
export class HalamanlistComponent implements OnInit {

  first=2
  datadariglob : any;
  constructor(public variabelglobal:GlobSerService){
    this.datadariglob = this.variabelglobal.getData();
   }

  ngOnInit() {
  }

}