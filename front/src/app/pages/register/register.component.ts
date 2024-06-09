import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from 'src/app/models/user';

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

  constructor(private userService: UserService) {}

  onSubmit(): void {
    this.userService.register(this.user).subscribe(
      (response) => {
        console.log('User registered successfully', response);
      },
      (error) => {
        console.error('There was an error during the registration', error);
      }
    );
  }
}
