import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { PanelProveedorComponent } from './panel-proveedor/panel-proveedor.component';
import { SubastasDisponiblesComponent } from './panel-proveedor/subastas-disponibles/subastas-disponibles.component';
import { ModalOfertaComponent } from './panel-proveedor/subastas-disponibles/modal-oferta/modal-oferta.component';
import { OfertasRealizadasComponent } from './panel-proveedor/ofertas-realizadas/ofertas-realizadas.component';
import { SubastasGanadasComponent } from './panel-proveedor/subastas-ganadas/subastas-ganadas.component';


@NgModule({
  declarations: [PanelProveedorComponent, SubastasDisponiblesComponent, ModalOfertaComponent, OfertasRealizadasComponent, SubastasGanadasComponent],
  imports: [
    CommonModule,
    ProveedorRoutingModule
  ]
})
export class ProveedorModule { }
