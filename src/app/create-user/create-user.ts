import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpsUserService } from '../services/httpsuser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-user.html',

  styleUrl: './create-user.scss',
})
export class CreateUser {
  constructor(
    private httpService: HttpsUserService,
    private router: Router,
  ) {}

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    website: new FormControl(''),
    phone: new FormControl('', [Validators.required, Validators.maxLength(11)]),
  });

  onSubmit() {
    if (this.userForm.valid) {
      console.log("Tayyor ma'lumot:", this.userForm.value);
      this.httpService.createUser(this.userForm.value).subscribe({
        next: (response) => {
          console.log('Serverdan javob:', response);
          alert('Muvaffaqiyatli saqlandi!');
          this.router.navigate(['/users']);
        },
      });
    } else {
      alert("Iltimos, hamma joyni to'g'ri to'ldiring!");
      this.userForm.markAllAsTouched();
    }
  }
  get name() {
    return this.userForm.get('name');
  }
  get email() {
    return this.userForm.get('email');
  }
  get phone() {
    return this.userForm.get('phone');
  }
}
