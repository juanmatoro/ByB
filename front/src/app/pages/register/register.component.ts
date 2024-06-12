import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user: User = {
    name: '',
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
        this.router.navigate(['/login']); // Redirige a la página de login
      },
      (error) => {
        console.error('There was an error during the registration', error);
      }
    );
  }
}
