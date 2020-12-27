import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

// Firebase
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { RegistrarseComponent } from './autenticacion/registrarse/registrarse.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
    // AngularFirestoreModule,
    
  ],
  providers: [AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
