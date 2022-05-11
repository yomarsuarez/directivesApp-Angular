import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: '**',
    redirectTo: 'productos'
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
