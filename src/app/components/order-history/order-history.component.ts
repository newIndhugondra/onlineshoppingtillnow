import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';

@Component({
  standalone: true,
  selector: 'app-order-history',
  imports: [CommonModule],
  templateUrl: './order-history.component.html'
})
export class OrderHistoryComponent {

  orders: any[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  cancel(index: number) {
    const confirmCancel = confirm("Are you sure you want to cancel this order?");
    if (!confirmCancel) return;

    this.orderService.cancelOrder(index);
    this.orders = this.orderService.getOrders();
  }
}
