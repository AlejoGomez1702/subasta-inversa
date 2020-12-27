import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit 
{
  //Indica si es un proveedor o un usuario SSIA
  public proveedor: boolean = false; 


  constructor(
    private autenticacionService: AutenticacionService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
  }

  // Regstrar un proveedor en autenticación y base de datos.
  registrarProveedor(provName, provDirec, provTel, provWeb, provEmail, provPassword)
  {
    this.autenticacionService.signUpProveedor(provName, provDirec, provTel, provWeb, provEmail, provPassword);
  }

  // Registrar un usuario SSIA
  registrarUsuario(userName, userApellidos, userEmail, userPassword)
  {
    this.autenticacionService.signUpUsuario(userName, userApellidos, userEmail, userPassword);
  }


  cambiarEstado(estado)
  {
    if(estado == 'ssia')
    {
      this.proveedor = false;
    }
    else
    {
      this.proveedor = true;
    }
  }

}
