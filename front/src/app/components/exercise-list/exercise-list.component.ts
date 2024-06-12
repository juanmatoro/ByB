import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseCartService } from 'src/app/service/exercise-cart.service';
import { RoutinesService } from 'src/app/service/routines.service';
import { Routine } from 'src/app/models/routine';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.scss'],
})
export class ExerciseListComponent implements OnInit {
  exercises: any[] = [];

  constructor(
    private exerciseCartService: ExerciseCartService,
    private router: Router,
    private routinesService: RoutinesService
  ) {}

  ngOnInit(): void {
    this.exercises = this.exerciseCartService.getExercises();
  }

  removeExercise(index: number): void {
    this.exerciseCartService.removeExercise(index);
    this.exercises = this.exerciseCartService.getExercises();
  }

  onSubmit(): void {
    const userId = sessionStorage.getItem('id');
    const token = sessionStorage.getItem('token');
    const newRoutine: Routine = {
      name: '', // Puedes obtener este valor de un formulario, por ejemplo
      date: '', // Fecha actual, puedes ajustarla según sea necesario
      comment: 'Esta es una nueva rutina', // Puedes obtener este valor de un formulario
      owner: userId, // ID del dueño, puedes obtener este valor según tu lógica de negocio
      exercise: this.exercises.map((exercise) => exercise._id),
    };
    this.routinesService.createRoutine(newRoutine, token).subscribe((res) => {
      console.log(res);
      // Después de crear la rutina, redirigir a la página routinelist
      this.router.navigate(['/routines']);
    });
  }
}
