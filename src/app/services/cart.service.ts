import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: any[] = [];

  addToCart(product: any) {
    const existing = this.cartItems.find(item => item.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

  getTotal() {
    return this.cartItems.reduce((sum, item) =>
      sum + (item.price * item.quantity), 0);
  }
}
