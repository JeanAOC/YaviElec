import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../pages/auth/login/login/login.component';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
use:any;
constructor(private login:LoginService , private router: Router){

}

canActivate(){
  if('a' == 'a'){  
   return true 
  }
  alert('No tiene permiso')
  this.router.navigate(['/vista-lista'])
  return false
}

}
