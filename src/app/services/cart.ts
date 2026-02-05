import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type CartItem = { id: number; name: string; price: number };
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [
    { id: 1, name: 'iphone 14', price: 500 },
    { id: 2, name: 'redmi 13', price: 400 },
    { id: 3, name: 'nokia 12', price: 300 },
  ];

  private cartSubject = new BehaviorSubject<CartItem[]>(this.cartItems);

  cart$ = this.cartSubject.asObservable();

  private emit() {
    this.cartSubject.next(this.cartItems);
  }

  addnewModel(item: Omit<CartItem, 'id'>) {
    const nextId = this.cartItems.length ? Math.max(...this.cartItems.map((x) => x.id)) + 1 : 1;

    this.cartItems.push({ id: nextId, ...item });
    this.emit();
  }

  getCart() {
    return this.cartItems;
  }

  DeleteItem(id: number) {
    this.cartItems = this.cartItems.filter((x) => x.id !== id);
    this.emit();
  }
}
