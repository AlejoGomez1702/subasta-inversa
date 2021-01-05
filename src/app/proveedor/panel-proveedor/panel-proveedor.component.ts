import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-panel-proveedor',
  templateUrl: './panel-proveedor.component.html',
  styleUrls: ['./panel-proveedor.component.scss']
})
export class PanelProveedorComponent implements OnInit 
{

  constructor(
    private router: Router,
    public databaseService: DatabaseService
  ) { }

  ngOnInit(): void 
  {
    this.databaseService.obtenerSubastasDisonibles();
  }

  irSubastasDisponibles()
  {
    this.router.navigate(['proveedor/subastas/disponibles']);
  }

}
