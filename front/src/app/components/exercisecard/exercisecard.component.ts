import { Component, OnInit } from '@angular/core';
import { ExerciseService } from 'src/app/pages/service/exercise.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercisecard',
  templateUrl: './exercisecard.component.html',
  styleUrls: ['./exercisecard.component.scss']
})
export class ExercisecardComponent {

  character: any = {}
  id:string =""

  constructor( private  service : ExerciseService, private route: ActivatedRoute ){
    this.route.params.subscribe((params)=>{console.log(params);
      this.id = params['id']
    })
  }


  ngOnInit(): void {
    this.service.getExerciseById(this.id).subscribe((response) =>{
      console.log(response);
      this.character = response
    })
  }

}
