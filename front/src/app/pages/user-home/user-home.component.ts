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
  private id: string | null;
  public userObj: any;
  constructor(private userService: UserService, private router: Router) {
    this.token = sessionStorage.getItem('token');
    this.id = sessionStorage.getItem('ids');
  }

  ngOnInit() {
    this.userService.getuserbyid(this.id, this.token).subscribe(
      (res) => {
        console.log(res);
        this.userObj = res.data
      },
      (err) => {
          console.error('A tu casa', err);
          this.router.navigate(['/login']); // Redirigir en caso de error también
        }
    );
  }
}
