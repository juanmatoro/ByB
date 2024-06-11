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
    // Inicializar la lista de ejercicios desde el servicio
    this.exercises = this.exerciseCartService.getExercises();
  }
 

  // Método para eliminar un ejercicio
  removeExercise(index: number): void {
    this.exerciseCartService.removeExercise(index);
    this.exercises = this.exerciseCartService.getExercises(); // Actualizar la lista después de eliminar
  }

  // onSubmit(): void {
  //   this.RoutinesService.createRoutine(this.exerciseCartService._id).subscribe(
  //     (res) => {
  //       console.log(res.data.token);
  //       sessionStorage.setItem('token', res.data.token)
  //       this.router.navigate(['/prueba'])
  //     },
  //     (err) => {
  //       console.error('There was an error during the registration', err);
  //     }
  //   );
  }
// }