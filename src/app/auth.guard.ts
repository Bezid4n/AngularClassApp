import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild {
  /**
   *
   */
  constructor(private authService:AuthService,private router:Router) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    return this.canActivate(childRoute,state)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let p=new Promise<boolean | UrlTree>((resolve,reject) =>{
      setTimeout(() => {
        if(this.authService.isloggedIn){
          resolve(this.authService.isloggedIn)
        }
        else{
          resolve(this.router.createUrlTree(['/']))
        }
      }, 1000);
    })
      return p;
  }

}
