import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {
  noid = 1;
  datatambah : any

  private Data= [{
    id  : 0,
    namajurusan : 'infor',
    penjelasanjurusan : 'infor'
  }];

  public getData(){
    return this.Data;
  }
  public addData(najur:String , penjur:String){
    this.datatambah={
      id : this.noid,
      namajurusan : najur,
      penjelasanjurusan : penjur
    }
  this.noid++;
  this.Data.push(this.datatambah);
  }

  public updateData(dataupdate){
    this.Data = dataupdate;
  }


  constructor() { }

}