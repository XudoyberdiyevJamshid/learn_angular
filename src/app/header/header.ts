import { AuthService } from './../services/auth';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  name = '';
  constructor(
    public userService: UserService,
    private router: Router,
    public auth: AuthService,
  ) {}

  addUser() {
    const t = this.name.trim();
    if (!t) return;
    this.userService.addUserLocal(t);
    this.name = '';
  }
  loadFromApi() {
    this.userService.loadUsers();
  }

  getHome() {
    this.router.navigate(['/']);
  }

  logut() {
    this.auth.logout();
  }
}
