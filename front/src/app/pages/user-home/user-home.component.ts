import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { RoutinesService } from 'src/app/service/routines.service';
import { Routine } from 'src/app/models/routine';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  
  private token: string | null;
  private id: string | null;
  public userObj: { name: string, favRoutines: Routine[] } = { name: '', favRoutines: [] };

  constructor(private userService: UserService, private routinesService: RoutinesService, private router: Router) {
    this.token = sessionStorage.getItem('token');
    this.id = sessionStorage.getItem('ids');
  }

  ngOnInit() {
    this.userService.getuserbyid(this.id, this.token).subscribe(
      (res) => {
        console.log(res);
        this.userObj = res.data;
        this.loadRoutines();
      },
      (err) => {
        console.error('Error fetching user data', err);
        this.router.navigate(['/login']);
      }
    );
  }

  loadRoutines() {
    if (this.token) {
      this.routinesService.getRoutines(this.token).subscribe(
        (res) => {
          console.log(res);
          this.userObj.favRoutines = res.data; // Asumiendo que las rutinas están en res.data
        },
        (err) => {
          console.error('Error fetching routines', err);
        }
      );
    }
  }
}