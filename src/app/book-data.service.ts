import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookDataService {

  constructor() { }

  public bookData = [
    {id:1 , name:'harry potter' , price: 25000 , status: 'we have this book in store'},
    {id:2 , name:'deutsch fremds' , price: 50000 , status: 'we dont have this book soryy'},
    {id:3 , name:'osyangar' , price: 30000 , status: 'we have this book in store'},
    {id:4 , name:'div o delbar' , price: 90000 , status: 'we have this book in store'},
    {id:5 , name:'ashaare saadi' , price: 12000 , status: 'we have this book in store'},
    {id:6 , name:'golestan' , price: 60000  , status: 'we dont have this book soryy'},
    {id:7 , name:'code in papers' , price: 12000 , status: 'we have this book in store'},
    {id:8 , name:'manam melale' , price: 67000 , status: 'we have this book in store'},
    {id:9 , name:'siyasat tamiz' , price: 88000 , status: 'we dont have this book soryy'},
    {id:10 , name:'englich book' , price: 54000  , status: 'we dont have this book soryy'},
  ]
  public usersData = [
    {id:1 , name: 'reza' , email:'reza@gmail.com' , password: '2264' , status : 'user in acc'} ,
    {id:2 , name: 'amir' , email:'amir@gmail.com' , password: '1987' , status : 'user NOT in acc'} ,
    {id:3 , name: 'diyako' , email:'diyako@gmail.com' , password: '2645' , status : 'user in acc'} ,
    {id:4 , name: 'korosh' , email:'korosh@gmail.com' , password: '1865' , status : 'user NOT in acc'} ,
    {id:5 , name: 'amin' , email:'amin@gmail.com' , password: '1907' , status : 'user NOT in acc'} ,
    {id:6 , name: 'amir ali' , email:'amirAli@gmail.com' , password: '6547' , status : 'user NOT in acc'} ,
    {id:7 , name: 'michael' , email:'michael@gmail.com' , password: '8576' , status : 'user in acc'} ,
    {id:8 , name: 'david' , email:'david@gmail.com' , password: '1234' , status : 'user in acc'} ,
    {id:9 , name: 'mohamad' , email:'mohamad@gmail.com' , password: '7263' , status : 'user in acc'} ,
    {id:10 , name: 'sasan' , email:'sasan@gmail.com' , password: '7362' , status : 'user NOT in acc'} ,
  ]
  userEmail: string = ''
  userPassword: string = ''
  userStatus: string = '' 

  getUserEmail(): string {
    return this.usersData[0].email
  } 
  getUserPassword(): string {
    return this.usersData[0].password
  }
  setUserEmail(email: string) {
    this.userEmail = email;
  }

  setUserPassword(pass: string) {
    this.userPassword = pass;
  }
}
