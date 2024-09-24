import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { BookDataService } from './book-data.service';

@Injectable({
  providedIn: 'root'
})
export class LoginCheakGuard implements CanActivate {
  constructor(private userData: BookDataService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const userEmail = this.userData.getUserEmail();
    const userPassword = this.userData.getUserPassword();

    if (userEmail && userPassword) {
      const data = this.userData.usersData.find(
        (user) => user.email === userEmail && user.password === userPassword
      );
      if (data) {
        return true;
      }
    }

    this.router.navigate(['/log-in']);
    return false;
  }
}