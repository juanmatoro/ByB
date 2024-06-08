import { Component, Input } from '@angular/core';
import { ExerciseService } from 'src/app/pages/service/exercise.service';

@Component({
  selector: 'app-exercisecard',
  templateUrl: './exercisecard.component.html',
  styleUrls: ['./exercisecard.component.scss']
})
export class ExercisecardComponent {
  @Input() exercise: ExerciseService


}
