import { Component } from '@angular/core';
import { CartService } from '../services/cart';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cart$;

  cart = { name: '', price: 0 };

  constructor(public cartService: CartService) {
    this.cart$ = this.cartService.cart$;
  }

  delete(id: number) {
    this.cartService.DeleteItem(id);
  }

  addCart() {
    if (!this.cart.name || this.cart.price <= 0) {
      alert('toldir');
      return;
    }

    this.cartService.addnewModel({
      name: this.cart.name,
      price: Number(this.cart.price),
    });

    this.cart = { name: '', price: 0 };
  }
}
