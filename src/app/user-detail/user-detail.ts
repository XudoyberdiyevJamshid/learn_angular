import { ApiService, User } from './../services/api';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.html',
})
export class UserDetail {
  user$!: Observable<User>;

  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router,
  ) {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.user$ = this.api.getUsers().pipe(map((users) => users.find((u) => u.id === +id)!));
  }

  goList() {
    this.router.navigate(['/users']);
    console.log(this.route.snapshot.paramMap.get('id')!);
  }
}
