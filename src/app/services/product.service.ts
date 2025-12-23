import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    { id: 1, name: "iPhone 15", price: 79999, image: "https://picsum.photos/200" },
    { id: 2, name: "Samsung S24", price: 69999, image: "https://picsum.photos/201" },
    { id: 3, name: "Laptop HP", price: 55000, image: "https://picsum.photos/202" }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
