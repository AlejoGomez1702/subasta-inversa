import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanelSsiaComponent } from './panel-ssia/panel-ssia.component';

const routes: Routes = [
  { path: '', component: PanelSsiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SsiaRoutingModule { }
