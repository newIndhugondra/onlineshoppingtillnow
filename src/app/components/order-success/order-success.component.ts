import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CheckoutService } from '../../services/checkout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-success',
  standalone: true,
  imports: [],
  templateUrl: './order-success.component.html',
  styleUrl: './order-success.component.css'
})
export class OrderSuccessComponent {
  constructor(
    private cartService: CartService,
    private router: Router,
    private checkout: CheckoutService
  ) {}
  
}
