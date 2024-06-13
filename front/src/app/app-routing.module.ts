import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ExercisecardComponent } from './components/exercisecard/exercisecard.component';
import { ExerciselistComponent } from './components/exerciselist/exerciselist.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth-guard.guard';
import { RoutinelistComponent } from './components/routinelist/routinelist.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lista', component: ExerciselistComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lista/:id', component: ExercisecardComponent },
  {path: 'routines', component: RoutinelistComponent},
  { path: 'prueba', component: FavoriteComponent, canActivate:[authGuard]},
  { path: 'user', component: UserHomeComponent, canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
