import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Exercise } from 'src/app/models/exercise';



@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  private baseUrl: string = 'localhost:4500/exercise';

  public exerciseData = {
    id: '',
    muscle: '',
    exerciseName: '',
    execution: '',
    level: "",
    url: "",
  };

  constructor(private http: HttpClient) { }

  getExercise() {
    return this.http.get(this.baseUrl);
  }
  getExerciseById(id: string) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  postExercise(newExercise: Exercise  ) {
    return this.http.post(this.baseUrl, newExercise);
  }
  deleteExercise(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  editNuevoExercise(newExercise: Exercise ) {
    this.exerciseData = newExercise;
  }
  putExercise(id: string, editedExercise: Exercise ) {
    return this.http.patch(`${this.baseUrl}/${id}`, editedExercise);
  }
  clearData() {
    this.exerciseData = {
      id: '',
      muscle: '',
      exerciseName: '',
      execution: '',
      level: "",
      url: "",
    };
  }

}
