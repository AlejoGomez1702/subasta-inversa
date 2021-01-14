import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertasRealizadasComponent } from './panel-proveedor/ofertas-realizadas/ofertas-realizadas.component';
import { PanelProveedorComponent } from './panel-proveedor/panel-proveedor.component';
import { ModalOfertaComponent } from './panel-proveedor/subastas-disponibles/modal-oferta/modal-oferta.component';
import { SubastasDisponiblesComponent } from './panel-proveedor/subastas-disponibles/subastas-disponibles.component';
import { SubastasGanadasComponent } from './panel-proveedor/subastas-ganadas/subastas-ganadas.component';

const routes: Routes = [
  { path: '', component: PanelProveedorComponent },
  { path: 'subastas/disponibles', component: SubastasDisponiblesComponent },
  { path: 'subastas/ofertar', component: ModalOfertaComponent },
  { path: 'subastas/ofertas', component:  OfertasRealizadasComponent},
  { path: 'subastas/ganadas', component: SubastasGanadasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }
