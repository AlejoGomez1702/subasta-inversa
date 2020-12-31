import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from './interfaces/proveedor';
import { User } from './interfaces/user';
import { AutenticacionService } from './servicios/autenticacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  // 0 => NO, 1 => Usuario SSIC, 2 => Proveedor.
  public logueado: number;

  constructor(private router: Router, 
              public authService: AutenticacionService) 
  { }

  ngOnInit(): void
  {
    this.verificarLogueo();
  }

  verificarLogueo()
  {
    let userLogin = localStorage.getItem('user');
    let user: User | Proveedor = JSON.parse(userLogin);
    if(userLogin !== null)
    {
      this.authService.logueado = user.tipo;
    }      
    else
    {
      this.authService.logueado = 0;
    }      
  }

  // handleLogin()
  // {
  //   this.verificarLogueo();
  //   console.log('Se esta ejecutando la funcion del evento');
  // }

  logout()
  {
    this.authService.cerrarSesion();
    this.authService.logueado = 0;
    this.router.navigate(['']);    
  }

}
