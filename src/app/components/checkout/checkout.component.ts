import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  standalone: true,
  selector: 'app-checkout',
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

  name = "";
  address = "";
  phone = "";
  paymentMethod = "COD";

  constructor(private checkoutService: CheckoutService, private router: Router) {}

  proceed() {

    if(!this.name || !this.address || !this.phone){
      alert("Please fill all details");
      return;
    }

    this.checkoutService.setCheckoutData({
      name: this.name,
      address: this.address,
      phone: this.phone,
      paymentMethod: this.paymentMethod
    });

    this.router.navigate(['/order-summary']);
    this.router.navigate(['/payment']);

  }
}
