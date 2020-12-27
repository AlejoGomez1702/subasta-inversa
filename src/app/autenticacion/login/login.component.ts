import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Role } from '../../modelos/role';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  Role = Role;

  constructor(private router: Router, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
  }

  login(role: Role) 
  {
    this.autenticacionService.login(role);
    this.router.navigate(['/']);
  }

}
