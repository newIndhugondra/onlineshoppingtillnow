import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/product';
import { CartService } from '../../../services/cart.service';
import { Router, RouterModule } from '@angular/router';
import { SearchService } from '../../../services/search.service';

@Component({
  standalone: true,
  selector: 'app-product-list',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: any[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private searchService: SearchService,
    private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.filteredProducts = this.products;
    this.searchService.searchText.subscribe(text => {
      text = text.toLowerCase();
      this.filteredProducts = this.products.filter(p =>
        p.name.toLowerCase().includes(text)
      );
    });
  }
  add(product: any) {
    this.cartService.addToCart(product);
    alert(product.name + " added to cart");
    //this.router.navigate(['/cart']);
  
  }
  
  



}
