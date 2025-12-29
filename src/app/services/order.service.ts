import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: any[] = [];

  constructor() {}

  saveOrder(order: any) {
    this.orders.push(order);
  }

  getOrders() {
    return this.orders;
  }

  cancelOrder(index: number) {
    this.orders.splice(index, 1);
  }
}
