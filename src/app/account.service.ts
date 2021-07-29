import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type AccountStatus='active' | 'inactive' | 'unknown'
export interface Account{
  name:string,
  status:AccountStatus,
  id?:number
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  public accountsChanged=new EventEmitter<Account[]>();
  public accountsEdited=new EventEmitter<string>();

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
  }
  removeAccount(id:number | undefined){
    this.accounts=this.accounts.filter(x=> x.id !==id)
    this.accountsChanged.emit(this.accounts)
  }
   editAccount(id:number,name: string){
    this.accounts[id].name=name;
    this.accountsEdited.emit(name)
    console.log(name)
    this.rooter.navigate(['']);
  }
}
