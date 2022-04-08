import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate(): boolean {
    const loggedInUser = JSON.parse(localStorage.getItem('login_user') || "{}");
    if(loggedInUser.roles == 'member'){
        this.router.navigate(['/']);
        alert('You have not admin ')
        return false;
      }
    return true;

  }
  
}
