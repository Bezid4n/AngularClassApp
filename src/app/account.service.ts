import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type AccountStatus='active' | 'inactive' | 'unknown'
export interface Account{
  name:string,
  status:AccountStatus,
  id:number
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public accountsChanged=new EventEmitter<Account[]>();
  public accountsEdited=new EventEmitter<string>();
  public statusUpdated=new EventEmitter<AccountStatus>();

  public accounts:Account[]=[
    {
      name:'Behzad Danesh',
      status:'active',
      id:0
    },
    {
      name:'Saeid Adabi',
      status:'inactive',
      id:1
    },
    {
      name:'Farzad Hemmatjou',
      status:'unknown',
      id:2
    }
  ];

  constructor(private rooter: Router) { }


   addAccount(newAccount: Account) {
    //  newAccount.id=Math.random();
    this.accounts.push({...newAccount , id:Math.random()});
  }

   updateAccountStatus(id: number,accountStatus: AccountStatus) {
    this.accounts[id].status = accountStatus;
    this.statusUpdated.emit(accountStatus)
  }
  removeAccount(id:number){
    this.accounts=this.accounts.filter(x=> x.id !==id)
    this.accountsChanged.emit(this.accounts)
  }

  //  editAccount(id:number,name: string){
  //   this.accounts[id].name=name;
  //   this.accountsEdited.emit(name)
  //   console.log(name)
  //   this.rooter.navigate(['']);
  // }

  updateAccount(id: number, accountInfo: { name: string, status: AccountStatus }) {
    const account = this.accounts.find(
      (s) => {
        return s.id === id;
      }
    );
    if (account) {
      account.name = accountInfo.name;
      account.status = accountInfo.status;
    }
  }

  getAccount(id: number) {
    const account = this.accounts.filter(a=> a.id == id);
    return account;
  }

  getAccounts(id: number) {
    const account = this.accounts.find(a=> a.id == id);
    return account;
  }

  getIndex(id: number){
    const i = this.accounts.findIndex(a=> a.id == id);
    return i;
  }
}
