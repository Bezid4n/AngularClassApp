import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account, AccountService, AccountStatus } from 'src/app/account.service';
import { LogService } from 'src/app/log.service';



@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

   account:{ id: number, name: string, status: string } = { id: 0, name: '', status: 'unknown' };
  constructor(private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private log:LogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      let account = this.accountService.getAccount(+p.id);
      if (account)
        this.account = account;
    })
  }

   onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    // const log = new LogService();
    this.accountService.updateAccountStatus(this.account.id, status as AccountStatus)
    this.log.logServiceStatusChanged(status);
  }



}
