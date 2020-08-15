import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username = "";
  password = "";

  accounts= [{"username": "Jye", "password": "abc123"},
            {"username": "Bob", "password": "123abc"},
            {"username": "Sam", "password": "sam123"}];
  
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isRegistered() {
    var registered = false;
     for (var i = 0; i < this.accounts.length; i++) {
       if (this.accounts[i].username == this.username && this.accounts[i].password == this.password) {
         registered = true;
       }
      }
    if (registered) {
      this.router.navigateByUrl("/account")
    } else {
      alert("Invalid credentials")
    }
  }
}

