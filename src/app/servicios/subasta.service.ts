import { Injectable } from '@angular/core';
import { Oferta } from '../interfaces/oferta';
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

  cerrarSubasta(subasta: Subasta): boolean
  {
    // Ofertas de la subasta en cuestion.
    let ofertasSubasta: Oferta[] = [];

    const ofertas = this.databaseService.ofertas;
    for (let i = 0; i < ofertas.length; i++) 
    {
      const oferta = ofertas[i];
      if(oferta.subasta.uid == subasta.uid)
      {
        ofertasSubasta.push(oferta);
      }
    }

    // Si no hay ofertas para la subasta.
    if(ofertasSubasta.length == 0)
      return false;

    let mejorOferta: Oferta;
    let valorMejorOferta = Infinity;

    for (const oferta of ofertasSubasta) 
    {
      const valorOferta = oferta.valor;
      if(valorOferta < valorMejorOferta)
      {
        mejorOferta = oferta;
      }            
    }

    // Actualizando la base de datos 
    this.databaseService.terminarSubasta(subasta, mejorOferta);

    return true;    
  }

  obtenerSubastas()
  {
    this.databaseService.obtenerSubastas();
  }

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

  crearOferta(subasta: Subasta, valor)
  {
    const proveedor = this.databaseService.proveedorLogueado;
    return this.databaseService.crearOferta(subasta, proveedor, valor);
  }

  eliminarSubasta(uid)
  {
    return this.databaseService.eliminarSubastaPorID(uid);
  }

}
