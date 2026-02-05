import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type CartItem = { id: number; name: string; price: number };
@Injectable({ providedIn: 'root' })
export class NewCartService {
  private cartItems: CartItem[] = [
    { id: 1, name: 'iphone', price: 500 },
    { id: 2, name: 'redmi', price: 400 },
  ];

  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);

  cart$ = this.cartSubject.asObservable();

  private emit() {
    this.cartSubject.next([...this.cartItems]);
  }

  getCart() {
    return this.cartItems;
  }

  add(item: { name: string; price: number }) {
    const id = this.cartItems.length + 1;
    this.cartItems.push({ id, ...item });

    this.emit();
  }

  delete(index: number) {
    this.cartItems.splice(index, 1);
    this.emit();
  }

  getTotal() {
    return this.cartItems.reduce((s, x) => s + x.price, 0);
  }

  getSnapshot() {
    return [...this.cartItems];
  }
}
