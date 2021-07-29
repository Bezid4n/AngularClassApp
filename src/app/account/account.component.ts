import { DepFlags } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Account, AccountService, AccountStatus } from '../account.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogService]
})
export class AccountComponent {
  @Input() account: Account ={name: '', status: 'unknown',id: -1};
  @Input() id: number = 0;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    // const log = new LogService();
    this.accountService.updateAccountStatus(this.id, status as AccountStatus)
    this.log.logServiceStatusChanged(status);
  }

  remove(){
    this.accountService.removeAccount(this.account.id);
  }
  edit(){
    this.accountService.editAccount(this.id,this.account.name);


  }

  // //Dependency Injection
  constructor(private log: LogService,private accountService: AccountService) {

  }


}
