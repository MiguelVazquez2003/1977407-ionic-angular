import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { CarritoComponent } from './carrito/carrito.component';
const rutas: Routes = [
    {
    path:'carrito',
    component:CarritoComponent
    },
    {
        path:'articulos/:categoria', 
        component: ArticulosComponent
    },
    {
    path:'administrador',
    component:AdministradorComponent
    },
    {
        path: 'detalle/:id',
        component: ArticuloDetalleComponent 
    },
    {
        path: '',
        redirectTo: '/administrador', 
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRoutingModule { }