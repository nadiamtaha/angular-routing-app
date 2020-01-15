import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit() {
    var btn=document.getElementById("btnId");
    btn.addEventListener("click",function(){
      alert("djdjd")
    })

  }

}
