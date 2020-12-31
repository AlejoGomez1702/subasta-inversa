import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NuevaSubastaComponent } from './panel-ssia/nueva-subasta/nueva-subasta.component';
import { PanelSsiaComponent } from './panel-ssia/panel-ssia.component';

const routes: Routes = [
  { path: '', component: PanelSsiaComponent },
  { path: 'subastas/nueva', component: NuevaSubastaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsiaRoutingModule { }
