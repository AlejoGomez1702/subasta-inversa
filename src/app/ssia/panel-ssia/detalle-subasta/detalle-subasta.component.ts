import { Component, OnInit } from '@angular/core';
import { Subasta } from 'src/app/interfaces/subasa';
import { SubastaService } from 'src/app/servicios/subasta.service';

@Component({
  selector: 'app-detalle-subasta',
  templateUrl: './detalle-subasta.component.html',
  styleUrls: ['./detalle-subasta.component.scss']
})
export class DetalleSubastaComponent implements OnInit 
{
  constructor(
    public subastaService: SubastaService
  ) 
  { 

  }

  ngOnInit(): void 
  {
  }

}
