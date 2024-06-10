import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/service/exercise.service';

@Component({
  selector: 'app-exerciselist',
  templateUrl: './exerciselist.component.html',
  styleUrls: ['./exerciselist.component.scss'],
})
export class ExerciselistComponent {
  exerciseList: Exercise[] = [];
  // Mapa de tipos de músculos a nombres de iconos de Material
  muscleIcons: { [key: string]: string } = {
    brazo: 'fitness_center',
    pierna: 'directions_walk',
    espalda: 'accessibility_new',
    pecho: 'favorite',
    // agrega más mapeos según sea necesario
  };
  constructor(private servicio: ExerciseService) {}

  ngOnInit() {
    this.servicio.getExercise().subscribe((res: any) => {
      this.exerciseList = res.data;
      console.log(this.exerciseList);
    });
  }
}
