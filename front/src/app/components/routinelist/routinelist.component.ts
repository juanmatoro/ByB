import { Component } from '@angular/core';
import { RoutinesService } from 'src/app/service/routines.service';

@Component({
  selector: 'app-routinelist',
  templateUrl: './routinelist.component.html',
  styleUrls: ['./routinelist.component.scss']
})
export class RoutinelistComponent {

  constructor(private servicio: RoutinesService) {}



  ngOnInit() {
    const token = sessionStorage.getItem('token')
    this.servicio.getRoutines(token).subscribe((res: any) => {
      console.log(res);
    });
  }

}
