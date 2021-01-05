import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelProveedorComponent } from './panel-proveedor/panel-proveedor.component';
import { ModalOfertaComponent } from './panel-proveedor/subastas-disponibles/modal-oferta/modal-oferta.component';
import { SubastasDisponiblesComponent } from './panel-proveedor/subastas-disponibles/subastas-disponibles.component';

const routes: Routes = [
  { path: '', component: PanelProveedorComponent },
  { path: 'subastas/disponibles', component: SubastasDisponiblesComponent },
  { path: 'subastas/ofertar', component: ModalOfertaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }
