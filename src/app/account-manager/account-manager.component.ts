import { Component, OnInit } from '@angular/core';
import { Account, AccountService } from '../account.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.css'],
  // providers: [LogService]
})
export class AccountManagerComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit(): void {
    this.accounts=this.accountService.accounts;
    this.accountService.accountsChanged.subscribe(accounts=>{
      this.accounts=accounts;

    })

  }
  accounts: Account[]=[];

  // onAccountAdded(newAccount: Account) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: Account) {
  //   this.accounts[updateInfo.id].status = updateInfo.status;
  // }




}
