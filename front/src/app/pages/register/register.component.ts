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

  passwordError: string = '';

  validatePassword(password: string): boolean {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/;
    if (!passwordPattern.test(password)) {
      this.passwordError = 'Password must be 8-12 characters long, include at least one lowercase letter, one uppercase letter, one number, and one special character (!@#$%^&*_=+-).';
      return false;
    }
    this.passwordError = '';
    return true;
  }


onSubmit(): void {
    if (this.validatePassword(this.user.password)) {
      this.userService.register(this.user).subscribe(
        (response) => {
          console.log('User registered successfully', response);
          this.router.navigate(['/login'])
        },
        (error) => {
          console.error('There was an error during the registration', error);
        }
      );
    } else {
      console.error('Password validation failed');
    }
  }
}
