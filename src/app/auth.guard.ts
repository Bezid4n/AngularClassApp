import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private authService:AuthService,private router:Router) {}
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
