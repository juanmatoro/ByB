import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExerciseCartService {
  private exercises: any[] = [];

  constructor() {}

  addExercise(exercise: any): void {
    this.exercises.push(exercise);
    console.log('Ejercicio añadido:', exercise);
    console.log('Lista de ejercicios:', this.exercises);
  }

  getExercises(): any[] {
    return this.exercises;
  }

  removeExercise(index: number): void {
    if (index >= 0 && index < this.exercises.length) {
      this.exercises.splice(index, 1);
      console.log('Ejercicio eliminado en el índice', index);
      console.log('Lista de ejercicios actualizada:', this.exercises);
    } else {
      console.error('Índice de ejercicio inválido:', index);
    }
  }
}
