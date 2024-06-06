import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExerciseComponent,
    FavoriteComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
