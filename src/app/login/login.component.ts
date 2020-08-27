import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

const backUrl = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  username = "";
  password = "";

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  public isRegistered() {
    let user = {username: this.username, password: this.password};
    this.httpClient.post(backUrl + '/api/auth', user, httpOptions).subscribe((data: any) => {
      if (data.ok) {
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('birthdate', data.birthdate);
        sessionStorage.setItem('age', data.age.toString());
        sessionStorage.setItem('email', data.email)
        sessionStorage.setItem('status', data.ok.toString())
        this.router.navigateByUrl("/account")
      } else {
        alert("Invalid credentials");
        sessionStorage.clear();
        sessionStorage.setItem('status', "false");
      }
    });
  }
}

