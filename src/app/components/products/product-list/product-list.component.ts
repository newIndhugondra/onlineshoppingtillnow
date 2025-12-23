import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  add(product: any) {
    this.cartService.addToCart(product);
    alert(product.name + " added to cart");
    //this.router.navigate(['/cart']);
  
  }
  
  



}
