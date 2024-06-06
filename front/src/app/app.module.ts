<<<<<<< HEAD
import { NgModule, Component } from '@angular/core';
=======
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
>>>>>>> 62cb59bbf1f3372f1e1615a7fa6a75b9122af2db
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from  '@angular/material/menu' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
=======
import { HomeComponent } from './pages/home/home.component';
import { ExerciseComponent } from './pages/exercise/exercise.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 62cb59bbf1f3372f1e1615a7fa6a75b9122af2db

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FooterComponent,
    HeaderComponent
=======
    HomeComponent,
    ExerciseComponent,
    FavoriteComponent,
    HistorialComponent
>>>>>>> 62cb59bbf1f3372f1e1615a7fa6a75b9122af2db
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule



>>>>>>> 62cb59bbf1f3372f1e1615a7fa6a75b9122af2db
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
