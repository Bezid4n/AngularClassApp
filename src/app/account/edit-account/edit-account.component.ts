import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService, AccountStatus } from 'src/app/account.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {

  account: { id: number; name: string; status: AccountStatus; } | undefined;
  accountName:string |undefined='';
 accountStatus:AccountStatus | undefined='unknown';

  constructor(private accountService:AccountService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.account = this.accountService.getAccounts(+this.activatedRoute.snapshot.params.id);
    this.accountName = this.account?.name;
    this.accountStatus = this.account?.status;

  }



  editAccount(){
    if (this.account && this.accountName && this.accountStatus)
      this.accountService.updateAccount(this.account.id, { name: this.accountName, status: this.accountStatus });
  }

}
