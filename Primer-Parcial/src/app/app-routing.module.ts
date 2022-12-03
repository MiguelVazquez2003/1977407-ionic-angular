import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';
import { EditarComponent } from './editar/editar.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const rutas: Routes = [
    {
    path:'carrito',
    component:CarritoComponent,
    
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'',
        component:LogInComponent
    },
    {
        path:'perfil',
        component:PerfilComponent
    },
    {
        path:'registro',
        component:RegistroComponent
    },
    {
        path:'logout',
        component:LogoutComponent
    },
    {
        path:'editar',
        component:EditarComponent
    },
 
    {
        path:'articulos/:categoria', 
        component: ArticulosComponent,
        
    },
    {
    path:'administrador',
    component:AdministradorComponent,

    },
    {
        path: 'detalle/:id',
        component: ArticuloDetalleComponent ,
     
    },
    
    {
        path: '',
        redirectTo: '/home', 
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})

export class AppRoutingModule { }