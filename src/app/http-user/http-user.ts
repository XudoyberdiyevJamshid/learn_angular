import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpsUserService } from '../services/httpsuser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-user',
  imports: [
    CommonModule,
    RouterLink,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './http-user.html',
  styleUrl: './http-user.scss',
})
export class HttpUser implements OnInit {
  users: any[] = [];
  isLoading: boolean = false;
  searchText = '';

  private searchSubject = new Subject<string>();

  displayedColumns: string[] = ['id', 'name', 'email', 'website', 'actions'];
  constructor(
    public httpUserService: HttpsUserService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
  ) {}

  ngOnInit() {
    this.loadUsers();
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((text) => {
        this.isLoading = true;
        this.cdr.detectChanges();
        if (text.trim() === '') {
          return this.httpUserService.getUser();
        } else {
          return this.httpUserService.searchUsers(text);
        }
      }),
    );
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
  onDelete(id: number) {
    console.log(id);
  }

  onSearch(event: any) {
    const text = event.target.value;

    this.searchSubject.next(text);
  }
}
