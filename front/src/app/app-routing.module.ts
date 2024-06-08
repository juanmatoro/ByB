import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ExercisecardComponent } from './components/exercisecard/exercisecard.component';
import { ExerciselistComponent } from './components/exerciselist/exerciselist.component';

const routes: Routes = [
  { path: '', component: ExercisecardComponent },
  { path: 'lista', component: ExerciselistComponent },
  { path: 'prueba', component: FavoriteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
