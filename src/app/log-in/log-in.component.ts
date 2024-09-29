import { Component, OnInit } from '@angular/core';

import { BookDataService } from '../book-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private userDatas: BookDataService) {}

  userEmail: string = '';
  userPassword: string = '';
  ngOnInit(): void {}

  userCheacker(email: string, pass: string) {
    const data = this.userDatas.usersData.find(
      (user) => user.email === email && user.password === pass
    );
    if(data) {
      this.userDatas.userStatus = 'user in acc'
      console.log(this.userDatas.userStatus);
    } else {
      this.userDatas.userStatus = 'user NOT in acc'
      console.log(this.userDatas.userStatus);
      
    }
  }
}
