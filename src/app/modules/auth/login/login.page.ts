import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    // this.router.navigateByUrl('/protected/choose-role');
    if (form.invalid) {
      return;
    }
    console.log(form);
  }

  loginGoogle() {

  }



}
