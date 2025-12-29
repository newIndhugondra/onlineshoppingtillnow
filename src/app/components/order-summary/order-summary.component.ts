import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { OrderService } from '../../services/order.service';
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
  checkoutDetails: any;

  constructor(
    private cartService: CartService,
    private checkoutService: CheckoutService,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit() {
    // load cart
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();

    // load checkout data
    this.checkoutDetails = this.checkoutService.getCheckoutData();

    // if user directly comes without checkout
    if (!this.checkoutDetails) {
      alert("Please complete checkout first");
      this.router.navigate(['/checkout']);
    }
  }

  placeOrder() {

    if (!this.checkoutDetails) {
      alert("Please complete checkout first");
      this.router.navigate(['/checkout']);
      return;
    }

    const order = {
      items: this.cartItems,
      total: this.total,
      details: this.checkoutDetails,
      date: new Date(),
      status: "Placed"
    };

    this.orderService.saveOrder(order);

    alert("🎉 Order placed successfully!");

    // clear cart
    this.cartService.cartItems = [];
    this.cartService.cartCount.next(0);

    // go to success page
    this.router.navigate(['/order-success']);
  }
}
