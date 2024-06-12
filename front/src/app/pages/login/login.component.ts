import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.login(this.user).subscribe(
      (response) => {
        console.log('User logged in successfully', response);
        this.router.navigate(['/exerciselist']); // Redirige al componente ExerciseList
      },
      (error) => {
        console.error('There was an error during the login', error);
      }
    );
  }
}
