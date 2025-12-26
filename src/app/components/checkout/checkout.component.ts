import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [CommonModule],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

  cartItems: any[] = [];
  total = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  placeOrder() {
    alert("Order placed successfully! 🎉");
    this.cartService.cartItems = [];
    this.cartService.cartCount.next(0);
    this.router.navigate(['/']);
  }
}
