import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router para la redirección
import { RoutinesService } from 'src/app/service/routines.service';

@Component({
  selector: 'app-routinelist',
  templateUrl: './routinelist.component.html',
  styleUrls: ['./routinelist.component.scss']
})
export class RoutinelistComponent implements OnInit {

  constructor(
    private router: Router, // Inyecta el servicio Router
    private servicio: RoutinesService
  ) {}

  ngOnInit(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.servicio.getRoutines(token).subscribe(
        (res: any) => {
          console.log(res);
          // Procesa los datos obtenidos del servicio, si es necesario
        },
        (error) => {
          console.error('Error al obtener las rutinas:', error);
          // Manejo de errores
        }
      );
    } else {
      console.error('Token de sesión no disponible.');
      // Redirige a la página de inicio de sesión si no hay un token de sesión disponible
      this.router.navigate(['/login']); // Ajusta la ruta según corresponda
    }
  }
}
