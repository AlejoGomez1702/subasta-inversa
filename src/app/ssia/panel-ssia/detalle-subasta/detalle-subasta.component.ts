import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Oferta } from 'src/app/interfaces/oferta';
import { Subasta } from 'src/app/interfaces/subasa';
import { DatabaseService } from 'src/app/servicios/database.service';
import { SubastaService } from 'src/app/servicios/subasta.service';

@Component({
  selector: 'app-detalle-subasta',
  templateUrl: './detalle-subasta.component.html',
  styleUrls: ['./detalle-subasta.component.scss']
})
export class DetalleSubastaComponent implements OnInit 
{

  public ofertas: Oferta[] = [];

  constructor(
    public subastaService: SubastaService,
    public databaseService: DatabaseService,
    private router: Router
  ) 
  {}

  ngOnInit(): void 
  {
    this.databaseService.obtenerOfertas();
    this.filtrarOfertas();
  }

  filtrarOfertas()
  {
    const subasta: Subasta = this.subastaService.subasta;
    // const ofertas: Oferta[] = this.databaseService.ofertas;
    console.log(subasta);
    console.log(this.databaseService.ofertas);

    this.databaseService.ofertas.forEach(oferta => {
      if(oferta.subasta.uid == subasta.uid)
      {
        this.ofertas.push(oferta);
      }
    });
  }

  cerrarSubasta(subasta: Subasta)
  {
    const result = this.subastaService.cerrarSubasta(subasta);
    if(!result)
    {
      window.alert('No se han realizado ofertas para la subasta seleccionada');
    }
    else
    {
      window.alert('Subasta cerrada correctamente!');
      this.router.navigate(['ssia']);
    }
  }

}
