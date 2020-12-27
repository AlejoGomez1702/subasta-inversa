import { Injectable } from '@angular/core';

import { User } from '../modelos/user';
import { Role } from '../modelos/role';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService 
{
  private user!: User;

  isAuthorized() 
  {
      return !!this.user;
  }

  hasRole(role: Role) 
  {
      return this.isAuthorized() && this.user.role === role;
  }

  login(role: Role) 
  {
    this.user = { role: role };
  }

  logout() 
  {
    this.user = null;
  }
}
