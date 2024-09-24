import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private userData: BookDataService, private router: Router) {}

  userEmail: string = '';
  userPassword: string = '';

  ngOnInit(): void {}

  userCheacker(email: string, pass: string) {
    const data = this.userData.usersData.find(
      (user) => user.email === email && user.password === pass
    );
    if (data) {
      this.userData.setUserEmail(email);
      this.userData.setUserPassword(pass);
      console.log('User logged in successfully!');
      this.router.navigate(['/books']);
    } else {
      console.log('Invalid email or password!');
    }
  }
}