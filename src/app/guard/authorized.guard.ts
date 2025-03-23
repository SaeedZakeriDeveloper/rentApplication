import {ActivatedRoute, ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import { AuthService } from '../services/auth.service';


export const authorizedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  let admin = authService.authenticatedAdmin;
  if (admin)
    return true
  else {
    router.navigate(['/notAuthorized']) ;
    return false;
  }

};


export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>
  authorizedGuard(route, state);