import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subasta } from 'src/app/interfaces/subasa';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-panel-ssia',
  templateUrl: './panel-ssia.component.html',
  styleUrls: ['./panel-ssia.component.scss']
})
export class PanelSsiaComponent implements OnInit 
{
  public subastasAbiertas: Subasta[] = [];
  public subastasCerradas: Subasta[] = [];

  constructor(
    private databaseService: DatabaseService,
    private router: Router
  ) 
  { 
    // this.iniciarInformacion();
  }

  ngOnInit(): void 
  {
    this.iniciarInformacion();
  }

  async iniciarInformacion()
  {
    this.subastasAbiertas = [];
    this.subastasCerradas = [];

    await this.databaseService.obtenerSubastas();
    let subastas = this.databaseService.subastas;
    // console.log(subastas);
    subastas.forEach(subasta => {
      if(!subasta.estado) // Si la subasta esta abierta
      {
        this.subastasAbiertas.push(subasta);        
      }
      else
      {
        this.subastasCerradas.push(subasta);
      }
    });
  }

  irSubastasActivas()
  {
    this.router.navigate(['ssia/subastas/abiertas']);
  }

}
