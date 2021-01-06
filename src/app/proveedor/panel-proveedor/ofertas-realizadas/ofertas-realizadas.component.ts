import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/interfaces/oferta';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-ofertas-realizadas',
  templateUrl: './ofertas-realizadas.component.html',
  styleUrls: ['./ofertas-realizadas.component.scss']
})
export class OfertasRealizadasComponent implements OnInit 
{
  public ofertasRealizadas: Oferta[] = [];

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) 
  { }

  ngOnInit(): void 
  {
    this.ofertasRealizadas = this.databaseService.historialOfertas;
  }

  goBack()
  {
    this.router.navigate(['proveedor']);
  }

}
