import { Injectable, NgZone } from '@angular/core';

import { User } from '../modelos/user';
import { Role } from '../modelos/role';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService 
{
  private user!: User;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  )
  {}

  // Sign in with email/password
  signIn(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        // this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    // const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
    // const userData: User = {
    //   uid: user.uid,
    //   email: user.email,
    //   displayName: user.displayName,
    //   photoURL: user.photoURL,
    //   emailVerified: user.emailVerified
    // }
    // return userRef.set(userData, {
    //   merge: true
    // })
  }

  isAuthorized() 
  {
      return !!this.user;
  }

  hasRole(role: Role) 
  {
      return this.isAuthorized() && this.user.role === role;
  }

  login(role: Role) 
  {
    this.user = { role: role };
  }

  logout() 
  {
    this.user = null;
  }
}
