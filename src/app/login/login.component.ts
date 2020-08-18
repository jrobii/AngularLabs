import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  email = "";
  password = "";

  accounts= [{"email": "jye@jrobi.co", "password": "abc123"},
            {"email": "bob@bob.com", "password": "123abc"},
            {"email": "sam@sammy.com", "password": "sam123"}];
  
  

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isRegistered() {
    var registered = false;
     for (var i = 0; i < this.accounts.length; i++) {
       if (this.accounts[i].email == this.email && this.accounts[i].password == this.password) {
         registered = true;
       }
      }
    if (registered) {
      this.router.navigateByUrl("/account");
    } else {
      alert("Invalid credentials");
    }
  }
}

