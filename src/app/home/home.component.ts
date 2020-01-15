import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName:string="ahmed bahnasy";
  userAge:number=26;
  //userImg:string="assets/images/one.jpg"
  isLogin:boolean=true;
  user:object={
    name:"nadia",
    age:38
  }
  users:object[]=[];
  friends:string[]=["nadia","ali"]

  constructor(_UsersService:UsersService) {
     this.users= _UsersService.users;
      console.log( this.users)
   }

  ngOnInit() {

  }

}
