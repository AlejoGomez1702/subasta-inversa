import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsiaRoutingModule } from './ssia-routing.module';
import { PanelSsiaComponent } from './panel-ssia/panel-ssia.component';
import { SubastasCerradasComponent } from './panel-ssia/subastas-cerradas/subastas-cerradas.component';
import { SubastasAbiertasComponent } from './panel-ssia/subastas-abiertas/subastas-abiertas.component';
import { NuevaSubastaComponent } from './panel-ssia/nueva-subasta/nueva-subasta.component';
import { SeleccionarProductosComponent } from './panel-ssia/nueva-subasta/seleccionar-productos/seleccionar-productos.component';
import { MilisPipe } from './pipes/milis.pipe';
import { DetalleSubastaComponent } from './panel-ssia/detalle-subasta/detalle-subasta.component';


@NgModule({
  declarations: [PanelSsiaComponent, SubastasCerradasComponent, SubastasAbiertasComponent, NuevaSubastaComponent, SeleccionarProductosComponent, MilisPipe, DetalleSubastaComponent],
  imports: [
    CommonModule,
    SsiaRoutingModule,
  ]
})
export class SsiaModule { }
