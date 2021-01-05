import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
// import { Role } from '../../modelos/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  // Role = Role;

  // Evento para AppComponent, para que cambie el navbar correctamente.
  @Output()
  isLogin = new EventEmitter<string>();

  constructor(
    private router: Router, 
    private autenticacionService: AutenticacionService
  ) 
  { }

  ngOnInit(): void {
  }

  iniciarSesionUser(userEmail, userPassword)
  {
    this.autenticacionService.signInUser(userEmail, userPassword);
  }

  iniciarSesionProveedor(userEmail, userPassword)
  {
    this.autenticacionService.signInProveedor(userEmail, userPassword)
  }

}
