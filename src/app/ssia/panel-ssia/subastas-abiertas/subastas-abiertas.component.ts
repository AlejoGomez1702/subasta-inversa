import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subasta } from 'src/app/interfaces/subasa';
import { DatabaseService } from 'src/app/servicios/database.service';
import { SubastaService } from 'src/app/servicios/subasta.service';

@Component({
  selector: 'app-subastas-abiertas',
  templateUrl: './subastas-abiertas.component.html',
  styleUrls: ['./subastas-abiertas.component.scss']
})
export class SubastasAbiertasComponent implements OnInit 
{

  public subastasAbiertas: Subasta[] = [];

  constructor(
    private databaseService: DatabaseService,
    private subastaService: SubastaService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.iniciarInformacion();
  }

  async iniciarInformacion()
  {
    this.subastasAbiertas = [];

    await this.databaseService.obtenerSubastas();
    let subastas = this.databaseService.subastas;
    // console.log(subastas);
    subastas.forEach(subasta => {
      if(!subasta.estado) // Si la subasta esta abierta
      {
        this.subastasAbiertas.push(subasta);        
      }
    });
  }

  verSubasta(subasta)
  {
    this.subastaService.subasta = subasta;
    this.router.navigate(['ssia/subastas/abiertas/detalle']);
  }

  eliminarSubasta(uid)
  {
    this.subastaService.eliminarSubasta(uid)
    .then(() => {
      window.alert('Subasta eliminada correctamente!');
    }).catch(() => {
      window.alert('no se pudo eliminar la subasta!');
    });
    this.iniciarInformacion();
  }

}
