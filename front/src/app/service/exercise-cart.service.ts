import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExerciseCartService {
  private exercises: any[] = [];

  addExercise(exercise: any) {
    this.exercises.push(exercise);
  }

  getExercises() {
    return this.exercises;
  }

  removeExercise(index: number) {
    this.exercises.splice(index, 1);
  }
}