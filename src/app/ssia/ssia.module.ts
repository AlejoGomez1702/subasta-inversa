import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SsiaRoutingModule } from './ssia-routing.module';
import { PanelSsiaComponent } from './panel-ssia/panel-ssia.component';


@NgModule({
  declarations: [PanelSsiaComponent],
  imports: [
    CommonModule,
    SsiaRoutingModule,
  ]
})
export class SsiaModule { }
