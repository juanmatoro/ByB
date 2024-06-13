import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
  private token: string | null;

  constructor(private userService: UserService, private router: Router) {
    this.token = sessionStorage.getItem('token');
  }

  ngOnInit() {
    this.userService.checksession(this.token).subscribe(
      (res) => {
        console.log(res);
        if (res.data) {
          console.log("falso");
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
