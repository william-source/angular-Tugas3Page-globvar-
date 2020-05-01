import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GlobSerService } from './glob-ser.service';
import{Routes,RouterModule} from '@angular/router';
import { HalamaninputComponent } from './halamaninput/halamaninput.component';
import { HalamanlistComponent } from './halamanlist/halamanlist.component';
import { HalamaneditComponent } from './halamanedit/halamanedit.component';

const ROUTES:Routes =[
  {path:'halamaninput',component : HalamaninputComponent},
  {path:'halamanlist',component : HalamanlistComponent},
  {path:'halamanedit/:id',component : HalamaneditComponent},
]


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(ROUTES)
    ],
  declarations: [ AppComponent, HelloComponent, HalamaninputComponent, HalamanlistComponent, HalamaneditComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GlobSerService]
})
export class AppModule { }