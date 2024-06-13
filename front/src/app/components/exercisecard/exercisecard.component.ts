import { ExerciseService } from 'src/app/service/exercise.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseCartService } from 'src/app/service/exercise-cart.service';

@Component({
  selector: 'app-exercisecard',
  templateUrl: './exercisecard.component.html',
  styleUrls: ['./exercisecard.component.scss'],
})
export class ExercisecardComponent implements OnInit {
  exercise: any = {};
  id: string = '';

  constructor(
    private service: ExerciseService,
    private route: ActivatedRoute,
    private exerciseCartService: ExerciseCartService,
    private router: Router,
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

  addToRoutine() {
    console.log(this.exercise);
    this.exerciseCartService.addExercise(this.exercise.data);
  }

  goToExerciseList(): void {
    this.router.navigate(['/lista']);
  }
  
}


