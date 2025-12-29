import { Injectable } from '@angular/core';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [

    // ---------------- LAPTOPS ----------------
    {
      id: 1,
      name: "HP Pavilion Laptop",
      price: 65000,
      category: "Laptop",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 2,
      name: "Dell Inspiron Laptop",
      price: 72000,
      category: "Laptop",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
    },
  
    // ---------------- MOBILES ----------------
    {
      id: 3,
      name: "iPhone 15",
      price: 79999,
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a"
    },
    {
      id: 4,
      name: "Samsung Galaxy S24",
      price: 69999,
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
  
    // ---------------- HEADPHONES ----------------
    {
      id: 5,
      name: "Sony Headphones",
      price: 4999,
      category: "Headphones",
      image: "https://images.unsplash.com/photo-1518444054494-43fffecc22e9"
    },
    {
      id: 6,
      name: "Boat Rockerz",
      price: 1999,
      category: "Headphones",
      image: "https://images.unsplash.com/photo-1512427691650-1e0c552a8524"
    },
  
    // ---------------- SHOES ----------------
    {
      id: 7,
      name: "Nike Running Shoes",
      price: 3500,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1528701800489-20be0b1e4d51"
    },
    {
      id: 8,
      name: "Adidas Sports Shoes",
      price: 4500,
      category: "Shoes",
      image: "https://images.unsplash.com/photo-1600180758890-6c2f3c2bbf4b"
    },
  
    // ---------------- TV ----------------
    {
      id: 9,
      name: "Sony Bravia TV",
      price: 95000,
      category: "TV",
      image: "https://images.unsplash.com/photo-1584907797073-7147c7c1a5de"
    },
    {
      id: 10,
      name: "Samsung Smart TV",
      price: 82000,
      category: "TV",
      image: "https://images.unsplash.com/photo-1583227423860-4a6bb12a0b05"
    }
  
  ];
  

  getProducts(): Product[] {
    return this.products;
  }
}
