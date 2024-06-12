import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExerciseCartService {
  private exercises: any[] = [];

  addExercise(exercise: any) {

    const exists = this.exercises.some(item => item._id === exercise._id);
    
    if (!exists) {
      this.exercises.push(exercise);
      console.log(this.exercises);
    } else {
      alert("El ejercicio ya está en la lista.");
    }
  }

  getExercises() {
    return this.exercises;
  }

  removeExercise(index: number) {
    this.exercises.splice(index, 1);
  }
}