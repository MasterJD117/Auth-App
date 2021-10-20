import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarTokenGuard } from './guards/validar-token.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false //Esto pone un Hash al url para navegadores viejos (se pone en true)
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
