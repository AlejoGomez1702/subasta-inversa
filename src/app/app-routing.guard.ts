import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacionService } from './servicios/autenticacion.service';
import { Role } from './modelos/role';



@Injectable({
  providedIn: 'root'
})
export class AppRoutingGuard implements CanActivate, CanLoad 
{
  constructor(
    private router: Router,
    private autenticacionService: AutenticacionService
  )
  {}

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      if (!this.autenticacionService.isAuthorized()) {
        this.router.navigate(['login']);
        return false;
    }

    const roles = route.data.roles as Role[];
    if (roles && !roles.some(r => this.autenticacionService.hasRole(r))) {
        this.router.navigate(['error', 'not-found']);
        return false;
    }

    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.autenticacionService.isAuthorized()) 
    {
        return false;
    }
    const roles = route.data && route.data.roles as Role[];
    if (roles && !roles.some(r => this.autenticacionService.hasRole(r))) 
    {
        return false;
    }
    return true;;
  }
}
