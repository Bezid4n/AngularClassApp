import { DepFlags } from '@angular/compiler/src/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, AccountService, AccountStatus } from '../account.service';
import { LogService } from '../log.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LogService]
})
export class AccountComponent implements OnInit {
  // @Input() account: Account ={name: '', status: 'unknown',id: -1};
  // @Input() id: number = 0;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  // onSetTo(status: string) {
  //   // this.statusChanged.emit({id: this.id, newStatus: status});
  //   // console.log('A server status changed, new status: ' + status);
  //   // const log = new LogService();
  //   this.accountService.updateAccountStatus(this.id, status as AccountStatus)
  //   this.log.logServiceStatusChanged(status);
  // }

  remove(id:number){
    this.accountService.removeAccount(id);
  }
  // edit(id:number,name:string){
  //   this.accountService.editAccount(id,name);

  // }



  // //Dependency Injection
  constructor(
    private log: LogService,
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {
    this.accounts=this.accountService.accounts;
    this.accountService.accountsChanged.subscribe(accounts=>{
      this.accounts=accounts;

    })

  }
  accounts: Account[]=[];


}
