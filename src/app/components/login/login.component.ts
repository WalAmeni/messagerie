import { Component } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(public auth: AuthService) {
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('')
  })

  login() {
    console.log("login user")
    if (this.loginForm.invalid) {
      return;
    }
    else if (this.loginForm.value.email ==='' || this.loginForm.value.password === '') {
      return;
    } else {
      this.auth.login(this.loginForm.value.email!, this.loginForm.value.password!)
    }
  }
}
