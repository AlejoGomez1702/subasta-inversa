import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/interfaces/oferta';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { Subasta } from 'src/app/interfaces/subasa';
import { SubastaFinalizada } from 'src/app/interfaces/subastaFinalizada';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-panel-proveedor',
  templateUrl: './panel-proveedor.component.html',
  styleUrls: ['./panel-proveedor.component.scss']
})
export class PanelProveedorComponent implements OnInit 
{
  // public ofertas: Oferta[] = [];
  public subastasGanadas: SubastaFinalizada[] = [];

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
    this.databaseService.obtenerSubastasFinalizadas();

    this.filtarSubastas();
  }

  filtarSubastas()
  {
    this.subastasGanadas = [];
    const subastas: SubastaFinalizada[] = this.databaseService.subastasFinalizadas;
    const proveedor: Proveedor = this.databaseService.proveedorLogueado;

    for (const subasta of subastas) 
    {
      if(proveedor.uid == subasta.oferta.proveedor.uid)
      {
        this.subastasGanadas.push(subasta);
      }
    }
  }

  irSubastasDisponibles()
  {
    this.router.navigate(['proveedor/subastas/disponibles']);
  }

  irOfertasRealizadas()
  {
    this.router.navigate(['proveedor/subastas/ofertas']);
  }

  irSubastasGanadas()
  {
    this.router.navigate(['proveedor/subastas/ganadas']);
  }

}
