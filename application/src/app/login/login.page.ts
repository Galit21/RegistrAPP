import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: string = '';
  pswrd: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    const extras = {
      state: { user: this.user },
    };
    this.router.navigate(['/home'], extras);
  }
}
