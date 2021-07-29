import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LogService{
  logServiceStatusChanged(status:string){
    console.log('A server status changed, new status: ' + status);
  }
  constructor(){
    console.log('constructor: log service')
  }
}
