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
      this.updateUserState();
    });

    // 🔹 Login State
    this.updateUserState();
  }

  // 🔹 Search Handler
  search(event: any) {
    this.searchService.setSearch(event.target.value);
  }

  // 🔹 Check Login / Username
  displayName: string = "";

  updateUserState() {
    this.isLoggedIn = this.auth.isLoggedIn();
    const user = this.auth.getUser();
  
    if (user) {
      const namePart = user.split('@')[0];      // indhugondra
      this.displayName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    }
  }
  

  // 🔹 Logout
  logout() {
    this.auth.logout();
    this.updateUserState();
  }
 

}
