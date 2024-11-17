import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../pages/auth/login/login/login.component';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {
use:any;
constructor(private login:LoginService , private router: Router){

}

canActivate(): boolean{
  if(this.login.isLogin()){
   
    return true
  }
  alert('DEBE LOGEARSE')
  this.router.navigate(['/login'])
  return false
}

}
