import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subasta } from 'src/app/interfaces/subasa';
import { DatabaseService } from 'src/app/servicios/database.service';
import { SubastaService } from 'src/app/servicios/subasta.service';

@Component({
  selector: 'app-subastas-cerradas',
  templateUrl: './subastas-cerradas.component.html',
  styleUrls: ['./subastas-cerradas.component.scss']
})
export class SubastasCerradasComponent implements OnInit 
{
  public subastasCerradas: Subasta[] = [];

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
    this.subastasCerradas = [];

    await this.databaseService.obtenerSubastas();
    let subastas = this.databaseService.subastas;
    // console.log(subastas);
    subastas.forEach(subasta => {
      if(subasta.estado) // Si la subasta esta cerrada
      {
        this.subastasCerradas.push(subasta);        
      }
    });
  }

}
