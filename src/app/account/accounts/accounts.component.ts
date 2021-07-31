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

  account: { id: number, name: string, status: AccountStatus } = { id: 0, name: '', status: 'unknown' };
  //accounts:Account[]=[];
  i=0;


  constructor(private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private log:LogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      let a = this.accountService.getAccount(+p.id);
      let index = this.accountService.getIndex(+p.id);
      this.i=index;
      //console.log(+p.id,'3');
      if (a)
        this.account.id=a[0].id
        this.account.name=a[0].name;
        this.account.status=a[0].status;
        console.log(this.account.id,'2');
    })

    //this.accounts=this.accountService.accounts;
    this.accountService.statusUpdated.subscribe(accounts=>{
      this.account.status=accounts;

    })

  }

   onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    // const log = new LogService();
    this.accountService.updateAccountStatus(this.i, status as AccountStatus)
    this.log.logServiceStatusChanged(status);
    console.log(this.account.id,'1');

  }



}
