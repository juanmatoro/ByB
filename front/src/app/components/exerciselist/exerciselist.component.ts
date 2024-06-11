import { Component } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/service/exercise.service';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrls: ['./exerciselist.component.scss'],
})
export class ExerciselistComponent {
  exerciseList: Exercise[] = [];
  filteredExerciseList: Exercise[] = [];
  predefinedMuscles: string[] = ['pecho', 'espalda', 'bíceps', 'tríceps', 'pierna', 'abdomen', ];
  muscleIcons: { [key: string]: string } = {
    brazo: 'fitness_center',
    pierna: 'directions_walk',
    espalda: 'accessibility_new',
    pecho: 'favorite',
    // Agrega más mapeos según sea necesario
  };
  searchMuscle: string = '';

  constructor(private servicio: ExerciseService) {}

  ngOnInit() {
    this.servicio.getExercise().subscribe((res: any) => {
      this.exerciseList = res.data;
      this.filteredExerciseList = [...this.exerciseList];
    });
  }

  normalizeMuscle(muscle: string): string {
    return muscle.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  filterByMuscle(muscle: string) {
    const normalizedMuscle = this.normalizeMuscle(muscle);
    this.filteredExerciseList = this.exerciseList.filter(exercise => {
      const normalizedExerciseMuscle = this.normalizeMuscle(exercise.muscle);
      return normalizedExerciseMuscle.includes(normalizedMuscle);
    });
  }

  resetFilter() {
    this.filteredExerciseList = [...this.exerciseList];
    this.searchMuscle = '';
  }
}