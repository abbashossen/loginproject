import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
   islogin: boolean;
  constructor() { }


  public islogin1(){
    return this.islogin;
  }
  public setlogin(){
    this.islogin=true;
  }

  public setlogout(){
    this.islogin=false;
  }
}
