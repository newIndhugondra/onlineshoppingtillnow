import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  cartCount = 0;
  isLoggedIn = false;
  username: any;

  constructor(
    private searchService: SearchService,
    private cartService: CartService,
    private auth: AuthService
  ) {}

  ngOnInit() {

    // 🔹 Live Cart Count
    this.cartService.cartCount.subscribe(count => {
      this.cartCount = count;
    });

    // 🔹 Login State
    this.updateUserState();
  }

  // 🔹 Search Handler
  search(event: any) {
    this.searchService.setSearch(event.target.value);
  }

  // 🔹 Check Login / Username
  updateUserState() {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.username = this.auth.getUser();
  }

  // 🔹 Logout
  logout() {
    this.auth.logout();
    this.updateUserState();
  }
}
