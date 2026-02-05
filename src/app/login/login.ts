import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  errorMsg: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      const isSuccess = this.authService.login(username!, password!);

      if (isSuccess) {
        this.router.navigate(['httpUser']);
      } else {
        this.errorMsg = 'Login yoki parol xato!';
      }
    }
  }
}
