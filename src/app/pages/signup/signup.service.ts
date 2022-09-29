import { Injectable } from '@angular/core';
import { Signup } from './signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private signups: Signup[] =[
   new Signup('abbas','162106')
  ];
  get signup(){
    // eslint-disable-next-line no-underscore-dangle
    return this.signups;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor() { }

  adduser(username: string , password: string){
    const newuser=new Signup(username,password);
    this.signups.push(newuser);
  }
}
