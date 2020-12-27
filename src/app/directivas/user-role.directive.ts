import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';
import { Role } from '../modelos/role';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Directive({
  selector: '[appUserRole]'
})
export class UserRoleDirective implements OnInit
{

  constructor(
    private templateRef: TemplateRef<any>,
    private autenticacionService: AutenticacionService,
    private viewContainer: ViewContainerRef) 
  { }
  userRoles!: Role[];
  @Input()

  ngOnInit() {
    let hasAccess = false;
    if (this.autenticacionService.isAuthorized() && this.userRoles) {
        hasAccess = this.userRoles.some(r => this.autenticacionService.hasRole(r));
    }
    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
  } 

  set appUserRole(roles: Role[]) {
    if (!roles || !roles.length) {
        throw new Error('Roles value is empty or missed');
    }
    this.userRoles = roles;
  }

}
