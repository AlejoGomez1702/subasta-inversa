import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/interfaces/oferta';
import { Subasta } from 'src/app/interfaces/subasa';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-panel-proveedor',
  templateUrl: './panel-proveedor.component.html',
  styleUrls: ['./panel-proveedor.component.scss']
})
export class PanelProveedorComponent implements OnInit 
{
  // public ofertas: Oferta[] = [];

  constructor(
    private router: Router,
    public databaseService: DatabaseService
  ) { }

  ngOnInit(): void 
  {
    this.databaseService.obtenerSubastas();
    this.databaseService.obtenerOfertas()
    .then(() => {
      this.databaseService.obtenerHistorialSubastasProveedor();
    });    
  }

  irSubastasDisponibles()
  {
    this.router.navigate(['proveedor/subastas/disponibles']);
  }

  irOfertasRealizadas()
  {
    this.router.navigate(['proveedor/subastas/ofertas']);
  }

}
