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
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { appRoutingModule } from './app.routing.module';



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
    FormsModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
