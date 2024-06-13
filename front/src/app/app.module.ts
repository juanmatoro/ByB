import { NgModule, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExercisecardComponent } from './components/exercisecard/exercisecard.component';
import { ExerciselistComponent } from './components/exerciselist/exerciselist.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MenuIconsComponent } from './core/menu-icons/menu-icons.component';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';
import { ExerciseListComponent } from './components/exercise-list/exercise-list.component';
import { authGuard } from './guards/auth-guard.guard';
import { AuthInterceptor } from './guards/auth.interceptor';
import { RoutinelistComponent } from './components/routinelist/routinelist.component';
import { UserHomeComponent } from './pages/user-home/user-home.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FavoriteComponent,
    HistorialComponent,
    ExercisecardComponent,
    ExerciselistComponent,
    LoginComponent,
    RegisterComponent,
    MenuIconsComponent,
    SafeUrlPipe,
    ExerciseListComponent,
    RoutinelistComponent,
    UserHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
