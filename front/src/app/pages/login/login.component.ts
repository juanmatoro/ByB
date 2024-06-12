import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserService } from '../../service/user.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

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

  constructor(private userService: UserService, private router:Router) {}


  onSubmit(): void {
    this.userService.login(this.user).subscribe(
      (res) => {
        console.log(res.data);
        sessionStorage.setItem('token', res.data.token)
        sessionStorage.setItem('name', res.data.user.name)
        sessionStorage.setItem('id', res.data.user._id)
        this.router.navigate(['/prueba'])
      },
      (err) => {
        console.error('There was an error during the registration', err);
      }
    );
  }
}
