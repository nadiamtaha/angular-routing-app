import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  users:object[]=[
    {name:'ali',age:24,img:'assets/images/one.jpg',salary:2838},
    {name:'ahmed',age:73,img:'assets/images/one.jpg',salary:388},
    {name:'mai',age:14,img:'assets/images/one.jpg',salary:8389},
    {name:'nor',age:27,img:'assets/images/one.jpg',salary:399},

  ];
  welcome(){
    alert("ay a7agaa")
  }
  constructor() { }
}
