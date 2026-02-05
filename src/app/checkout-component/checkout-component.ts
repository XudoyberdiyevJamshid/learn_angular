import { NewCartService } from './../services/new-cart';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout-component',
  imports: [],
  templateUrl: './checkout-component.html',
  styleUrl: './checkout-component.scss',
})
export class CheckoutComponent {
  total = 0;
  constructor(public newcartService: NewCartService) {
    this.total = this.newcartService.getTotal();
  }
}
