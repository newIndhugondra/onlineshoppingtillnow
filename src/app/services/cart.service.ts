import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  cartItems: any[] = [];
  cartCount = new BehaviorSubject<number>(0);
  
  addToCart(product: any) {
    const existing = this.cartItems.find(item => item.id === product.id);
  
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  
    this.updateCount();
  }
  

  getCartItems() {
    return this.cartItems;
  }
  getCartCount() {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }
  
  removeItem(id: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.updateCount();
  }
  updateCount() {
    const total = this.cartItems.reduce((sum, i) => sum + i.quantity, 0);
    this.cartCount.next(total);
  }
    

  getTotal() {
    return this.cartItems.reduce((sum, item) =>
      sum + (item.price * item.quantity), 0);
  }
}
