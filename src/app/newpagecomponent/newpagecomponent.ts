import { Component } from '@angular/core';
import { NewCartService } from '../services/new-cart';
import { HeaderComponent } from '../header-component/header-component';
import { CheckoutComponent } from '../checkout-component/checkout-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newpagecomponent',
  imports: [HeaderComponent, CheckoutComponent, CommonModule, FormsModule],
  templateUrl: './newpagecomponent.html',
  styleUrl: './newpagecomponent.scss',
})
export class Newpagecomponent {
  cart$: any;

  form = { name: '', price: 0 };

  constructor(public newCartService: NewCartService) {
    this.cart$ = this.newCartService.cart$;
  }

  add() {
    if (!this.form.name || this.form.price <= 0) {
      alert('toldir');
      return;
    }

    this.newCartService.add({
      name: this.form.name,
      price: Number(this.form.price),
    });

    this.form = { name: '', price: 0 };
  }

  delete(index: number) {
    this.newCartService.delete(index);
  }
}
