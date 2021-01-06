import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Oferta } from '../interfaces/oferta';
import { Producto } from '../interfaces/producto';
import { Proveedor } from '../interfaces/proveedor';
import { Subasta } from '../interfaces/subasa';
import { User } from '../interfaces/user';
import { ModalOfertaComponent } from '../proveedor/panel-proveedor/subastas-disponibles/modal-oferta/modal-oferta.component';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService
{
  public usuarioLogueado: User;  
  public proveedorLogueado: Proveedor;

  public productos: Producto[];
  public subastas: Subasta[] = [];
  public subastasDisponibles: Subasta[] = [];
  public ofertas: Oferta[] = [];
  public historialOfertas: Oferta[] = [];
  // Ofertas de una subasta en especifico
  public oferta: Oferta;

  constructor(
    private db: AngularFireDatabase
  ) 
  { }

  crearOferta(subasta: Subasta, proveedor: Proveedor, valor: number)
  {
    const oferta = {
      subasta: subasta,
      proveedor: proveedor,
      valor: valor
    };

    return this.db.database.ref('/ofertas').push(oferta);
  }

  obtenerHistorialSubastasProveedor(): Oferta[]
  {
    let ofertas: Oferta[] = [];
    console.log('Ofertas llamando al historial de proveedor');
    console.log(this.ofertas);

    this.ofertas.forEach(oferta => {
      if(oferta.proveedor.uid == this.proveedorLogueado.uid)
      {
        ofertas.push(oferta);
      }
    });

    this.historialOfertas = ofertas;
    return ofertas;
  }

  guardarProveedorNuevo(uid, provName, provDirec, provTel, provWeb, email: string)
  {
    this.db.database.ref('proveedores/' + uid).set({
      nombre: provName,
      direccion: provDirec,
      telefono: provTel,
      web: provWeb,
      email: email,
      tipo: 2
    });
  }

  guardarUsuarioNuevo(uid, userName, userApellidos, userEmail)
  {
    this.db.database.ref('usuarios/' + uid).set({
      nombre: userName,
      apellidos: userApellidos,
      email: userEmail,
      tipo: 1
    });
  }

  async getUserById(userUid)
  {
    await this.db.database.ref('/usuarios/' + userUid).once('value')
    .then((user) => {
      // console.log(user.val());
      this.usuarioLogueado = user.val();
    });
  }

  async getProveedorById(userUid)
  {
    await this.db.database.ref('/proveedores/' + userUid).once('value')
    .then((user) => {
      // console.log(user.val());
      this.proveedorLogueado = user.val();
    });
  }

  async obtenerProductos()
  {
    let productosResultado: Producto[] = [];
    let producto: Producto;

    await this.db.database.ref('/productos').once('value')
    .then((productos) => {
      productos.forEach(element => {
        producto = element.val();
        producto.uid = element.key;
        productosResultado.push(producto);
      });    

      this.productos = productosResultado;
    });
  }

  async obtenerOfertas()
  {
    let ofertasResultado: Oferta[] = [];
    let oferta: Oferta;

    await this.db.database.ref('/ofertas').once('value')
    .then((ofertas) => {
      ofertas.forEach(element => {
        oferta = element.val();
        oferta.uid = element.key;
        ofertasResultado.push(oferta);
      });

      this.ofertas = ofertasResultado;
    });
  }


  crearSubasta(subasta: Subasta)
  {
    return this.db.database.ref('/subastas').push(subasta);
  }

  async obtenerSubastas()
  {
    this.subastas = [];
    let subastasResultado: Subasta[] = [];
    let subasta: Subasta;

    await this.db.database.ref('/subastas').once('value')
    .then((subastas) => {
      subastas.forEach(element => {
        subasta = element.val();
        subasta.uid = element.key;
        subastasResultado.push(subasta);
      });    

      this.subastas = subastasResultado;
      this.obtenerSubastasDisponibles();
    });
  }

  obtenerSubastasDisponibles()
  {
    this.subastasDisponibles = [];
    this.subastas.forEach(subasta => {
      if(!subasta.estado)
      {
        this.subastasDisponibles.push(subasta);
      }
    });
  }

  // async obtenerSubastasDisonibles()
  // {
  //   this.subastasDisponibles = [];
  //   let subastasResultado: Subasta[] = [];
  //   let subasta: Subasta;

  //   await this.db.database.ref('/subastas').once('value')
  //   .then((subastas) => {
  //     subastas.forEach(element => {
  //       subasta = element.val();
  //       if(!subasta.estado) // Si la subasta esta disponible
  //       {
  //         subasta.uid = element.key;
  //         subastasResultado.push(subasta);
  //       }        
  //     });    

  //     this.subastasDisponibles = subastasResultado;
  //   });
  // }

  eliminarSubastaPorID(uid)
  {
    return this.db.database.ref('/subastas/' + uid).remove();
  }

}
