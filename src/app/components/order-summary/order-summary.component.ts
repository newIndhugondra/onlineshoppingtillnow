import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-order-summary',
  imports: [CommonModule],
  templateUrl: './order-summary.component.html'
})
export class OrderSummaryComponent {

  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  placeOrder() {
    this.cartService.cartItems = [];
    this.cartService.cartCount.next(0);

    this.router.navigate(['/order-success']);
  }
}
