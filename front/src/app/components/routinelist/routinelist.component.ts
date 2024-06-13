import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutinesService } from 'src/app/service/routines.service';

@Component({
  selector: 'app-routinelist',
  templateUrl: './routinelist.component.html',
  styleUrls: ['./routinelist.component.scss']
})
export class RoutinelistComponent {
  private token: string | null;
  id: string = '';

  constructor(private servicio: RoutinesService,   private route: ActivatedRoute,) {
    this.token = sessionStorage.getItem('token')
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }



  ngOnInit() {

    this.servicio.getRoutines(this.token).subscribe((res: any) => {
      console.log(res);
    });
  }

}
