import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  standalone: true,
  selector: 'app-payment',
  imports: [CommonModule, FormsModule],
  templateUrl: './payment.component.html'
})
export class PaymentComponent {

  paymentMethod = 'CARD';
  cardNumber = '';
  upiId = '';

  constructor(private checkout: CheckoutService, private router: Router) {}

  pay() {
    if (this.paymentMethod === 'CARD' && this.cardNumber === '') {
      alert('Enter card number');
      return;
    }

    if (this.paymentMethod === 'UPI' && this.upiId === '') {
      alert('Enter UPI ID');
      return;
    }

    // save payment in checkout service
    let checkoutData = this.checkout.getCheckoutData();

    if (!checkoutData) {
      alert("Please complete checkout first");
      this.router.navigate(['/checkout']);
      return;
    }

    checkoutData.paymentMethod = this.paymentMethod;
    this.checkout.setCheckoutData(checkoutData);

    alert("Payment Successful ✔");
    this.router.navigate(['/order-summary']);
  }
}
