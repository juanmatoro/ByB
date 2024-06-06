import { NgModule, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from  '@angular/material/menu' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ExerciseComponent,
    FavoriteComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
