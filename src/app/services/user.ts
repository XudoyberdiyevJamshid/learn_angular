import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ApiService, User } from './api';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  users$ = this.usersSubject.asObservable();

  loading = false;
  error = '';

  constructor(private api: ApiService) {}

  fetchUsers$(): Observable<User[]> {
    return this.api.getUsers();
  }

  loadUsers() {
    this.loading = true;
    this.error = '';

    this.api
      .getUsers()
      .pipe(
        tap((users) => {
          this.usersSubject.next(users);
          this.loading = false;
        }),
        catchError(() => {
          this.error = 'Userlarni yuklab bo‘lmadi';
          this.loading = false;
          this.usersSubject.next([]);
          return of([]);
        }),
      )
      .subscribe();
  }

  addUserLocal(name: string) {
    const current = this.usersSubject.value;
    const newUser: User = {
      id: Date.now(),
      name,
      username: name,
      email: `${name.toLowerCase()}@local.dev`,
    };
    this.usersSubject.next([...current, newUser]);
  }

  removeUserLocal(index: number) {
    const copy = [...this.usersSubject.value];
    copy.splice(index, 1);
    this.usersSubject.next(copy);
  }

  getUsers() {
    return this.usersSubject;
  }
}
