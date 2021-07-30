import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgarDirective } from './agar.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AccountsComponent } from './account/accounts/accounts.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';

const routes: Routes = [
  { path: '' , component: NewAccountComponent },
  { path: 'LOA' , component: AccountComponent, children:[
    { path: ':id', component: AccountsComponent },
    { path: ':id/edit', component: EditAccountComponent },
  ]},
  { path: '404' , component: NotFoundComponent },
  { path: '**' , redirectTo:'404' }

]

@NgModule({
  declarations: [
    AppComponent,
    AgarDirective,
    AccountComponent,
    NewAccountComponent,
    AccountManagerComponent,
    NotFoundComponent,
    AccountsComponent,
    EditAccountComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
