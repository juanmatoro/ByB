import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserService } from '../../service/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  

  user: User = {
    email: '',
    password: '',
  };

  constructor(private userService: UserService) {}


  onSubmit(): void {
    this.userService.login(this.user).subscribe(
      (res) => {
        console.log();
        sessionStorage.setItem('token', res.data.token)
      },
      (err) => {
        console.error('There was an error during the registration', err);
      }
    );
  }
}
