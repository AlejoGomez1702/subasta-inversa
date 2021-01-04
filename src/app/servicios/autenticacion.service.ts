import { Injectable, NgZone } from '@angular/core';

import { User } from '../interfaces/user';
import { Role } from '../modelos/role';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseService } from './database.service';
import { Proveedor } from '../interfaces/proveedor';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService 
{
  // Se loguea un usuario SSIA.
  private user: User;

  // Se loguea un proveedor.
  private proveedor: Proveedor;

  // Indica el tipo de usuario logueado 
  // 0 => NO, 1 => Usuario SSIC, 2 => Proveedor.
  public logueado: number;

  constructor(
    public afAuth: AngularFireAuth,
    public db: DatabaseService,
    public router: Router,  
  )
  {}


  obtenerUsuarioLocal(): User
  {
    const userLocal = localStorage.getItem('user');
    const user = JSON.parse(userLocal);
    this.user = user;
    return user;
  }

  // Sign in with email/password
  signInUser(email, password) 
  {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        let userUid = user.user.uid;
        window.alert('Se logueo correctamente el usuario');
        // Obteniendo el usuario de la base de datos.
        this.db.getUserById(userUid)
        .then(() => {
          this.user = this.db.usuarioLogueado;
          this.logueado = 1;
          this.user.uid = userUid;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.router.navigate(['ssia']);
        });
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  signInProveedor(email, password)
  {
    return this.afAuth.signInWithEmailAndPassword(email, password)
    .then((user) => {
      // console.log(user.user.uid);
      let userUid = user.user.uid;
      window.alert('Se logueo correctamente el proveedor');
      // Obteniendo el usuario de la base de datos.
      this.db.getProveedorById(userUid)
      .then(() => {
        this.proveedor = this.db.proveedorLogueado;
        this.logueado = 2;
        this.proveedor.uid = userUid;
        localStorage.setItem('user', JSON.stringify(this.user));
        this.router.navigate(['proveedor']);
      });
    }).catch((error) => {
      window.alert(error.message);
    });
  }

  // Registra un proveedor
  signUpProveedor(provName, provDirec, provTel, provWeb, email: string, password : string)
  {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((user) => {      
      let uid = user.user.uid;
      this.logueado = 0;
      this.db.guardarProveedorNuevo(uid, provName, provDirec, provTel, provWeb, email);
      window.alert('Se registro el proveedor correctamente');
      this.router.navigate(['login']);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      window.alert(error.message);
    });
  }

  // Registra un usuario Ssia
  signUpUsuario(userName, userApellidos, userEmail, userPassword)
  {
    return this.afAuth.createUserWithEmailAndPassword(userEmail, userPassword)
    .then((user) => {            
      let uid = user.user.uid;
      this.logueado = 0;
      this.db.guardarUsuarioNuevo(uid, userName, userApellidos, userEmail);
      window.alert('Se registro el usuario correctamente');
      this.router.navigate(['login']);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      window.alert(error.message);
    });
  }


  cerrarSesion()
  {
    this.afAuth.signOut();
    localStorage.removeItem('user');
    window.alert('Sesión cerrada correctamente!');
  }

  
}
