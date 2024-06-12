import { Routine } from 'src/app/models/routine';
import { Component, OnInit } from '@angular/core';
import { ExerciseCartService } from 'src/app/service/exercise-cart.service';
import { RoutinesService } from './../../service/routines.service';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
})
export class ExerciseListComponent implements OnInit {
  exercises: any[] = [];

  constructor(private exerciseCartService: ExerciseCartService, private routinesService: RoutinesService) {}

  ngOnInit(): void {
    // Inicializar la lista de ejercicios desde el servicio
    this.exercises = this.exerciseCartService.getExercises();
  }

  // Método para eliminar un ejercicio
  removeExercise(index: number): void {
    this.exerciseCartService.removeExercise(index);
    this.exercises = this.exerciseCartService.getExercises(); // Actualizar la lista después de eliminar
  }

  onSubmit(): void {
    const userId = sessionStorage.getItem('id');
    const token = sessionStorage.getItem('token');
    const newRoutine: Routine = {
      name: '', // Puedes obtener este valor de un formulario, por ejemplo
      date: '', // Fecha actual, puedes ajustarla según sea necesario
      comment: 'Esta es una nueva rutina', // Puedes obtener este valor de un formulario
      owner: userId, // ID del dueño, puedes obtener este valor según tu lógica de negocio
      exercise: this.exercises.map(exercise => exercise._id),
    };
    this.routinesService.createRoutine(newRoutine, token).subscribe((res) => {
      console.log(res);   
    });
  }
}
