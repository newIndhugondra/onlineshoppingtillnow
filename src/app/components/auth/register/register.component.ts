import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  email = "";
  password = "";

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    const success = this.auth.register(this.email, this.password);

    if (!success) {
      alert("User already exists!");
      return;
    }

    alert("Registration successful 🎉");
    this.router.navigate(['/login']);
  }
}
