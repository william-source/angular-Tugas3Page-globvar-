import { Component } from '@angular/core';
import{GlobSerService} from './glob-ser.service';
import{Router} from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
datadariglob : any;
 
constructor(private router : Router,public variabelglobal:GlobSerService){
  // this.datadariglob = this.variabelglobal.getData();
}

halamanI(){
 this.router.navigate(['/halamaninput']); 
}
halamanL(){
 this.router.navigate(['/halamanlist']); 
}

}
