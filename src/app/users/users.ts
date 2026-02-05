import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user';
import { Observable } from 'rxjs';
import { User } from '../services/api';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './users.html',
})
export class Users {
  users$: Observable<User[]>;

  constructor(
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.users$ = this.userService.users$;
  }

  goDetails(id: number) {
    console.log(id);

    // this.router.navigate(['/users', id]);
  }
}
