import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { RegistrarseComponent } from './autenticacion/registrarse/registrarse.component';

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
      },
      {
        path: 'registrarse',
        component: RegistrarseComponent
      }
    ]
  },
  {
    path: 'ssia',
    loadChildren: () => import('./ssia/ssia.module').then(m => m.SsiaModule)
  },
  {
    path: 'proveedor',
    loadChildren: () => import('./proveedor/proveedor.module').then(m => m.ProveedorModule)
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
    // AutenticacionService,
    // AppRoutingGuard
  ]
})
export class AppRoutingModule { }
