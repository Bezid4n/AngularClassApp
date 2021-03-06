import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountComponent } from "./account/account.component";
import { AccountsComponent } from "./account/accounts/accounts.component";
import { EditAccountComponent } from "./account/edit-account/edit-account.component";
import { AuthGuard } from "./auth.guard";
import { EditGuard } from "./edit.guard";
import { NewAccountComponent } from "./new-account/new-account.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TemplateFormComponent } from "./template-form/template-form.component";


const routes: Routes = [
  { path: '' , component: NewAccountComponent },
  { path: 'LOA' , component: AccountComponent, canActivate:[AuthGuard],canActivateChild:[AuthGuard], children:[
    { path: ':id', component: AccountsComponent },
    { path: ':id/edit', component: EditAccountComponent, canDeactivate:[EditGuard] },
  ]},
  { path: 'FOA' , component: TemplateFormComponent },
  { path: '404' , component: NotFoundComponent },
  { path: '**' , redirectTo:'404' }

]

@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})

export class appRoutingModule{}
