import { Component } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/pages/service/exercise.service';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrls: ['./exerciselist.component.scss']
})
export class ExerciselistComponent {
  exerciseList: Exercise[] = [];

  constructor(private servicio: ExerciseService) {}

  ngOnInit() {

    this.servicio.getExercise().subscribe((data: any) => {
      this.exerciseList = data;    
    });
  }
}
