import { Component } from '@angular/core';
import { NewCartService } from '../services/new-cart';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'app-header-component',
  imports: [CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  cart$;
  count$;

  total$;

  constructor(public newCartService: NewCartService) {
    this.cart$ = this.newCartService.cart$;
    this.count$ = this.cart$.pipe(map((items) => items.length));
    this.total$ = this.cart$.pipe(map((items) => items.reduce((s, x) => s + x.price, 0)));
  }
}
