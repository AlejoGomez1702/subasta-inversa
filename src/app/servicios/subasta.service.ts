import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { Subasta } from '../interfaces/subasa';
import { AutenticacionService } from './autenticacion.service';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class SubastaService 
{
  // Producto involucrado en la subasta
  public producto: Producto;

  // Subasta seleccionada para ver el detalle
  public subasta: Subasta;  

  constructor(
    private databaseService: DatabaseService,
    private autenticacionService: AutenticacionService
  ) 
  { }

  crearSubasta(detalle: string, vMaximo: number)
  {
    let subasta: Subasta;
    const user = this.autenticacionService.obtenerUsuarioLocal();

    if(this.producto)
    {
      subasta = {
        detalle: detalle,
        estado: false,
        producto: this.producto,
        valorMaximo: vMaximo,
        fechaInicio: new Date(),
        uidUsuario: user.uid
      };
      return this.databaseService.crearSubasta(subasta);
    }

    return false;
  }

  eliminarSubasta(uid)
  {
    return this.databaseService.eliminarSubastaPorID(uid);
  }

}
