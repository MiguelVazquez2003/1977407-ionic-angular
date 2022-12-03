import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { IonicModule,NavParams } from '@ionic/angular';
import { ArticulosComponent } from './articulos/articulos.component';
import { FooterComponent } from './footer/footer.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { CarritoComponent } from './carrito/carrito.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { AdministradorComponent } from './administrador/administrador.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { LogoutComponent } from './logout/logout.component';
import { EditarComponent } from './editar/editar.component';
import { AuthGuardService } from './services/authguard.service';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ArticulosComponent,
    FooterComponent,
    ArticuloDetalleComponent,
    CarritoComponent,
    AdministradorComponent,
    MenuComponent,
    LogInComponent,
    HomeComponent,
    RegistroComponent,
    PerfilComponent,
    LogoutComponent,
    EditarComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    
  ],
  
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
