import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Producto } from '../interfaces/producto';
import { Proveedor } from '../interfaces/proveedor';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService
{
  public usuarioLogueado: User;  
  public proveedorLogueado: Proveedor;

  public productos: Producto[];

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
      console.log('Servicio');
      console.log(productosResultado);
    });
  }

}
