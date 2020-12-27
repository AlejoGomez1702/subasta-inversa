import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { AppRoutingGuard } from './app-routing.guard';
import { Role } from './modelos/role';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent
      },

      // {
      //   path: 'profile',
      //   canActivate: [AppRoutingGuard],
      //   component: ProfileComponent
      // },

      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'ssia',
    canLoad: [AppRoutingGuard],
    canActivate: [AppRoutingGuard],
    data: {
      roles: [
        Role.Ssia,
      ]
    },
    loadChildren: () => import('./ssia/ssia.module').then(m => m.SsiaModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AutenticacionService,
    AppRoutingGuard
  ]
})
export class AppRoutingModule { }
