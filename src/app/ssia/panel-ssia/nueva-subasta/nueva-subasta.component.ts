import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/servicios/database.service';
import { SubastaService } from 'src/app/servicios/subasta.service';

@Component({
  selector: 'app-nueva-subasta',
  templateUrl: './nueva-subasta.component.html',
  styleUrls: ['./nueva-subasta.component.scss']
})
export class NuevaSubastaComponent implements OnInit 
{

  constructor(
    // private databaseService: DatabaseService,
    private subastaService: SubastaService,
    private router: Router
  ) 
  { }

  ngOnInit(): void {
  }

  crearSubasta(detalle: string, vMaximo)
  {
    const sub = this.subastaService.crearSubasta(detalle, vMaximo);
    if(sub)
    {
      window.alert('Subasta creada correctamente!');
      this.router.navigate(['ssia']);
    }
  }

}
