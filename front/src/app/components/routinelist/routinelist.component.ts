import { Component, OnInit } from '@angular/core';
import { ExerciseCartService } from '../../service/exercise-cart.service';

@Component({
  selector: 'app-routinelist',
  templateUrl: './routinelist.component.html',
  styleUrls: ['./routinelist.component.scss']
})
export class RoutinelistComponent implements OnInit {
  selectedExercises: any[] = [];

  constructor(private exerciseCartService: ExerciseCartService) { }

  ngOnInit(): void {
    this.selectedExercises = this.exerciseCartService.getExercises(); // Cambio aquí
  }
}
