// routinelist.component.ts
import { Component } from '@angular/core';
import { ExerciseCartService } from 'src/app/service/exercise-cart.service';

@Component({
  selector: 'app-routinelist',
  templateUrl: './routinelist.component.html',
  styleUrls: ['./routinelist.component.scss'],
})
export class RoutinelistComponent {
  constructor(private exerciseCartService: ExerciseCartService) {}

  addToRoutine(exercise: any): void {
    this.exerciseCartService.addExercise(exercise);
  }
}
