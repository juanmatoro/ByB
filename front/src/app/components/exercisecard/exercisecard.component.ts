import { ExerciseService } from 'src/app/service/exercise.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExerciseCartService } from 'src/app/service/exercise-cart.service';

@Component({
  selector: 'app-exercisecard',
  templateUrl: './exercisecard.component.html',
  styleUrls: ['./exercisecard.component.scss'],
})
export class ExercisecardComponent implements OnInit {
  @Output() addToRoutine: EventEmitter<any> = new EventEmitter<any>();

  exercise: any = {};
  id: string = '';

  constructor(
    private service: ExerciseService,
    private route: ActivatedRoute,
    private exerciseCartService: ExerciseCartService
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.service.getExerciseById(this.id).subscribe((res) => {
      this.exercise = res;
    });
  }

  onAddToRoutine(): void {
    this.addToRoutine.emit(this.exercise.data);
  }
}
