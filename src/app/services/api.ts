import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.base}/users`);
  }
}
