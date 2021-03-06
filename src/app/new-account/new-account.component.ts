import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AccountService, AccountStatus,Account } from '../account.service';
import { AccountComponent } from '../account/account.component';
import { AuthService } from '../auth.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogService]
})
export class NewAccountComponent implements OnInit {
  //  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  @ViewChild('accountName')
  accountName: ElementRef<HTMLInputElement> | undefined;



  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
    // const log = new LogService();

    if(this.accountName){
      this.accountService.addAccount({name: accountName, status: accountStatus as AccountStatus,id:Math.random()})
      this.accountName.nativeElement.value="";
    }

    this.log.logServiceStatusChanged(accountStatus);

  }

  // cancelAccount(){
  //   if(this.accountName){
  //     this.accountName.nativeElement.value="";
  //     this.flag=true;
  //   }
  // }

  // editAccount(){

  // }

  login(){
    this.authService.login()
    this.isloggedIn=this.authService.isloggedIn;
  }
  logout(){
    this.authService.logout()
    this.isloggedIn=this.authService.isloggedIn;
  }

  isloggedIn=false


 constructor(private log: LogService
  ,private accountService:AccountService
  ,private authService:AuthService){

 }
  ngOnInit(): void {
    // this.accountService.accountsEdited.subscribe(nameAcc=>{
    //   if(this.accountName){
    //     this.accountName.nativeElement.value=nameAcc;
    //     this.flag=!this.flag

    //   }
    // })
    this.isloggedIn=this.authService.isloggedIn;
  }

  flag=true;





}
