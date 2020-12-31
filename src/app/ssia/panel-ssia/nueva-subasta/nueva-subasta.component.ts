import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-nueva-subasta',
  templateUrl: './nueva-subasta.component.html',
  styleUrls: ['./nueva-subasta.component.scss']
})
export class NuevaSubastaComponent implements OnInit {

  constructor(
    private databaseService: DatabaseService
  ) 
  { }

  ngOnInit(): void {
  }

  crearSubasta()
  {
    this.databaseService.obtenerProductos();
  }

}
