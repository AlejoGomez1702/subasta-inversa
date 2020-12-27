import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Directive({
  selector: '[appUser]'
})
export class UserDirective implements OnInit
{

  constructor(
    private templateRef: TemplateRef<any>,
    private autenticacionService: AutenticacionService,
    private viewContainer: ViewContainerRef
  ) 
  { }

  ngOnInit() {
    const hasAccess = this.autenticacionService.isAuthorized();

    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}

}
