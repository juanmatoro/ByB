import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { session } from '../utils/session';
import { UserService } from '../service/user.service';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router:Router = inject(Router);
  const protectedRoutes:string[] = ['/prueba']
  
  

  if (!sessionStorage.getItem('token')) {
    console.log('Token inexistente');
    return protectedRoutes.includes(state.url) && !session ? router.navigate(['/login']) : false;
  }else{

    return true;
  }
};
