import { Component } from '@angular/core';
import { CartService } from '../services/cart';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.scss',
})
export class Product {
  constructor(private cartService: CartService) {}
}
