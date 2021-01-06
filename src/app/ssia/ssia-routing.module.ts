import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleSubastaComponent } from './panel-ssia/detalle-subasta/detalle-subasta.component';
import { InventarioComponent } from './panel-ssia/inventario/inventario.component';
import { NuevaSubastaComponent } from './panel-ssia/nueva-subasta/nueva-subasta.component';
import { PanelSsiaComponent } from './panel-ssia/panel-ssia.component';
import { SubastasAbiertasComponent } from './panel-ssia/subastas-abiertas/subastas-abiertas.component';
import { SubastasCerradasComponent } from './panel-ssia/subastas-cerradas/subastas-cerradas.component';

const routes: Routes = [
  { path: '', component: PanelSsiaComponent },
  { path: 'subastas/nueva', component: NuevaSubastaComponent },
  { path: 'subastas/abiertas', component: SubastasAbiertasComponent},
  { path: 'subastas/cerradas', component: SubastasCerradasComponent},
  { path: 'subastas/abiertas/detalle', component: DetalleSubastaComponent },
  { path: 'inventario', component: InventarioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsiaRoutingModule { }
