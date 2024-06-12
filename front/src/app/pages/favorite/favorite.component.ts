import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent {
  private token: string | null;

  constructor(private userService: UserService, private router: Router) {
    this.token = sessionStorage.getItem('token');
  }
  private APIHeaders = {
    Accept: 'aplication/json',
    'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': '*',
    Authorization: {
      toString() {
        return `Bearer ${sessionStorage.getItem('token')}`;
      },
    },
  };

  ngOnInit() {
    this.userService.checksession(this.token).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        if (res.data) {
          console.log('falso');
          this.router.navigate(['/login']);
        }
      },
      (err) => {
        console.error('A tu casa', err);
        this.router.navigate(['/login']); // Redirigir en caso de error también
      }
    );
  }
}
