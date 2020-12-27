import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './modelos/role';
import { AutenticacionService } from './servicios/autenticacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'subasta-inversa';

  constructor(private router: Router, 
              private authService: AutenticacionService) 
  { }

  // get isAuthorized() {
  //   return this.authService.isAuthorized();
  // }

  // get isSsia() {
  //   return this.authService.hasRole(Role.Ssia);
  // }

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['login']);
  // }

}
