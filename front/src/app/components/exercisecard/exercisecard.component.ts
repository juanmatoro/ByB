import { ExerciseService } from 'src/app/service/exercise.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercisecard',
  templateUrl: './exercisecard.component.html',
  styleUrls: ['./exercisecard.component.scss'],
})
export class ExercisecardComponent {
  exercise: any = {};
  id: string = '';

  constructor(private service: ExerciseService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.service.getExerciseById(this.id).subscribe((res) => {
      console.log(res);
      this.exercise = res;
    });
  }
}
