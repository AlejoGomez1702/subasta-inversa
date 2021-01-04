import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Producto } from '../interfaces/producto';
import { Proveedor } from '../interfaces/proveedor';
import { Subasta } from '../interfaces/subasa';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService
{
  public usuarioLogueado: User;  
  public proveedorLogueado: Proveedor;

  public productos: Producto[];
  public subastas: Subasta[] = [];

  constructor(
    private db: AngularFireDatabase
  ) 
  { }

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
    });
  }

  eliminarSubastaPorID(uid)
  {
    return this.db.database.ref('/subastas/' + uid).remove();
  }

}
