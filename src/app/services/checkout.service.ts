import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  checkoutData: any = null;

  setCheckoutData(data: any) {
    this.checkoutData = data;
  }

  getCheckoutData() {
    return this.checkoutData;
  }
  constructor() { }
}
