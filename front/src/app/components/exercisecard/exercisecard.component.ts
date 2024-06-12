import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseService } from '../../service/exercise.service';
import { ExerciseCartService } from '../../service/exercise-cart.service';

@Component({
  selector: 'app-exercisecard',
  templateUrl: './exercisecard.component.html',
  styleUrls: ['./exercisecard.component.scss']
})
export class ExercisecardComponent implements OnInit {
  exercise: any = {};
  id: string = '';

  constructor(
    private service: ExerciseService,
    private route: ActivatedRoute,
    private router: Router,
    private exerciseCartService: ExerciseCartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.loadExercise(this.id);
    });
  }

  loadExercise(id: string): void {
    this.service.getExerciseById(id).subscribe((res) => {
      this.exercise = res;
    });
  }

  addToRoutine(): void {
    this.exerciseCartService.addExercise(this.exercise.data);
    this.router.navigate(['/routines']); // Navega a la página de rutinas
  }
}
