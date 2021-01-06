import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subasta } from 'src/app/interfaces/subasa';
import { DatabaseService } from 'src/app/servicios/database.service';
import { SubastaService } from 'src/app/servicios/subasta.service';

@Component({
  selector: 'app-subastas-disponibles',
  templateUrl: './subastas-disponibles.component.html',
  styleUrls: ['./subastas-disponibles.component.scss']
})
export class SubastasDisponiblesComponent implements OnInit 
{

  constructor(
    public subastaService: SubastaService,
    public databaseService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit(): void 
  {
    this.iniciarInformacion();
  }

  iniciarInformacion()
  {
    this.subastaService.obtenerSubastas();    
  }

  proponerOferta(subasta: Subasta)
  {
    const vMaximoOferta = subasta.valorMaximo;
    const valorIntroducido = window.prompt('Ingrese el valor de su oferta');
    const valor: number = +valorIntroducido;

    if(valor > vMaximoOferta)
    {
      window.alert('El valor de la oferta es mayor que el maximo permitido');
    }
    else
    {
      this.subastaService.crearOferta(subasta, valor)
      .then(() => {
        window.alert('Oferta creada correctamente');
      })
      .catch(() => {
        window.alert('No fue posible crear la oferta');
      });
    }
    this.router.navigate(['proveedor/subastas/disponibles']);
  }

}
