import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  standalone: true,
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html'
})
export class CartComponent {

  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  remove(id: number) {
    this.cartService.removeItem(id);
    this.cartItems = this.cartService.getCartItems();
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cartService.getTotal();
  }
}
