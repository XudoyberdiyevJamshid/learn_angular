import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpsUserService } from '../services/httpsuser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-http-user',
  imports: [CommonModule, RouterLink],
  templateUrl: './http-user.html',
  styleUrl: './http-user.scss',
})
export class HttpUser implements OnInit {
  users: any[] = [];
  isLoading: boolean = false;

  constructor(
    public httpUserService: HttpsUserService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading = true;

    this.httpUserService.getUser().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
        console.log('Kelgan userlar:', data);
        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error('xatolik', err);
        this.isLoading = false;
      },
      complete: () => {
        console.log("So'rov tugadi");
      },
    });
  }
}
