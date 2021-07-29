import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgarDirective } from './agar.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountManagerComponent } from './account-manager/account-manager.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: NewAccountComponent },
  { path: 'LOA' , component: AccountManagerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AgarDirective,
    AccountComponent,
    NewAccountComponent,
    AccountManagerComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
