import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username = sessionStorage.getItem('username');
  birthdate = sessionStorage.getItem('birthdate');
  age = sessionStorage.getItem('age');
  email = sessionStorage.getItem('email');
  public status = sessionStorage.getItem('status');
  ok: boolean
  
  

  constructor(private router: Router) {
    this.ok = this.checkOk()
    if (!this.ok) {
      this.router.navigateByUrl("/login");
    }
  }

  ngOnInit(): void {
  }

  checkOk() {
    if (sessionStorage.getItem('status') == "false") {
      return false;
    } else {
      return true;
    }
  }

  addNewSessionStorage() {
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('birthdate', this.birthdate);
    sessionStorage.setItem('age', this.age);
    sessionStorage.setItem('email', this.email)
    this.router.navigateByUrl("/account")
  }
}
