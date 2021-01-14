import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/interfaces/proveedor';
import { SubastaFinalizada } from 'src/app/interfaces/subastaFinalizada';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-subastas-ganadas',
  templateUrl: './subastas-ganadas.component.html',
  styleUrls: ['./subastas-ganadas.component.scss']
})
export class SubastasGanadasComponent implements OnInit 
{
  public subastasGanadas: SubastaFinalizada[] = [];

  constructor(
    public databaseService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {

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

  goBack()
  {
    this.router.navigate(['/proveedor']);
  }

}
