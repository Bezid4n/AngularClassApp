import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService, AccountStatus } from 'src/app/account.service';
import { editCanLeave } from 'src/app/edit.guard';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit,editCanLeave {

  account: { id: number; name: string; status: AccountStatus; } | undefined;
  accountName:string |undefined='';
 accountStatus:AccountStatus | undefined='unknown';

  constructor(private accountService:AccountService,private activatedRoute:ActivatedRoute) { }
  canLeave(): boolean {
    return confirm("Are you sure?")
  }

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
