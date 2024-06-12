import { Routine } from 'src/app/models/routine';
import { ExerciseService } from './../../service/exercise.service';
import { RoutinesService } from './../../service/routines.service';
// exercise-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ExerciseCartService } from 'src/app/service/exercise-cart.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
})
export class ExerciseListComponent implements OnInit {
  exercises: any[] = [];



  constructor(private exerciseCartService: ExerciseCartService, private RoutinesService: RoutinesService
  ) {}

  ngOnInit(): void { 
    console.log(this.exercises);
    this.exercises = this.exerciseCartService.getExercises();
  }
 

  
  removeExercise(index: number): void {
    this.exerciseCartService.removeExercise(index);
    this.exercises = this.exerciseCartService.getExercises(); 
  }

    onSubmit(): void {
      const ids = this.exercises.map(objeto => objeto._id);
      const userId = sessionStorage.getItem('id')
      const token = sessionStorage.getItem('token')
      const newRoutine: Routine = {
        name: '', 
        date: '', 
        comment: 'Esta es una nueva rutina', 
        owner: userId, 
        exercise: this.exercises.map(exercise => exercise._id),
      };
      this.RoutinesService.createRoutine(newRoutine, token).subscribe((res) => {
        console.log(res);
        
      });
    }
   
}