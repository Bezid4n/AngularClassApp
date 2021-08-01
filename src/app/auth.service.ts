import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

   isloggedIn=false;

   login(){
     this.isloggedIn=true
   }
   logout(){
    this.isloggedIn=false
  }
}
