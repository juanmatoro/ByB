import { Component, Input } from '@angular/core';
import { Exercise } from 'src/app/models/exercise';
import { ExerciseService } from 'src/app/pages/service/exercise.service';

@Component({
  selector: 'app-exercisecard',
  templateUrl: './exercisecard.component.html',
  styleUrls: ['./exercisecard.component.scss']
})
export class ExercisecardComponent {
  exerciseList: Exercise[] = [];

  @Input() service: ExerciseService;


}
