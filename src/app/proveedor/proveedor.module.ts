import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { PanelProveedorComponent } from './panel-proveedor/panel-proveedor.component';
import { SubastasDisponiblesComponent } from './panel-proveedor/subastas-disponibles/subastas-disponibles.component';
import { ModalOfertaComponent } from './panel-proveedor/subastas-disponibles/modal-oferta/modal-oferta.component';


@NgModule({
  declarations: [PanelProveedorComponent, SubastasDisponiblesComponent, ModalOfertaComponent],
  imports: [
    CommonModule,
    ProveedorRoutingModule
  ]
})
export class ProveedorModule { }
