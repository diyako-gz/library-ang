import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BookDataService } from './book-data.service';
import { LogInComponent } from './log-in/log-in.component';

@Injectable({
  providedIn: 'root'
})
export class LoginCheakGuard implements CanActivate {
  constructor(private userData : BookDataService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if(this.userData.userStatus === 'user in acc') {
      return true
    } else {
      this.router.navigate(['/log-in']);
      return false
    }
  }
}
