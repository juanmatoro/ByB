import { Component, OnInit } from '@angular/core';
import { ExerciseCartService } from 'src/app/service/exercise-cart.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
})
export class ExerciseListComponent implements OnInit {
  exercises: any[] = [];
  

  constructor(private exerciseCartService: ExerciseCartService) {}

  ngOnInit(): void {
    this.exercises = this.exerciseCartService.getExercises();
  }

  removeExercise(index: number) {
    this.exerciseCartService.removeExercise(index);
  }
}