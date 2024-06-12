import { UserService } from 'src/app/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  user: any;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found in localStorage');
      this.router.navigate(['/login']);
      return;
    }

    this.userService.getCurrentUser(token).subscribe(
      (data) => {
        this.user = data.user; // Asigna los datos del usuario a la variable `user`
      },
      (error) => {
        console.error('Error fetching user data', error);
        this.router.navigate(['/login']);
      }
    );
  }
}
