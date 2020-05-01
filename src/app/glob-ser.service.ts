import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {
  private Data= [{
    namajurusan : 'infor',
    penjelasanjurusan : 'infor'
  }];

  public getData(){
    return this.Data;
  }
  public setData(databaru){
    this.Data = databaru;
  }
  public updateData(databaru,namajurusan){
    if(namajurusan=this.getData())
    {
      this.Data = databaru
    }
  }

  constructor() { }

}