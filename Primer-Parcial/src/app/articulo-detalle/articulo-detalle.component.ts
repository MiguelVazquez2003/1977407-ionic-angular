import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ServicioCarritoService } from '../services/servicio-carrito.service';
import { Articulos } from '../models/articulo.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css'],
})
export class ArticuloDetalleComponent implements OnInit {
  cantidad: number;
  id: number;
  meta: Observable<any>;
  private documentoFirebase: AngularFirestoreDocument<Articulos>;
  articulosFirebase: Observable<Articulos | undefined>;
  articulo: Articulos;
  idArticulo: string = this.ruta.snapshot.params['id'];
  usuarioLogueado: boolean = false;

  constructor(
    private aFirestore: AngularFirestore,
    private ruta: ActivatedRoute,
    private carritoService: ServicioCarritoService,
    private storage: AngularFireStorage,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController
  ) {
    this.documentoFirebase = aFirestore.doc<Articulos>('articulos/' + this.idArticulo);
    this.articulosFirebase = this.documentoFirebase.valueChanges({ idField: 'id' });
    const ref = this.storage.ref('articulos');
    this.meta = ref.getMetadata();
  }

  ngOnInit(): void {
    this.afAuth.authState.subscribe((user) => {
      this.usuarioLogueado = !!user;
    });
  }

  valorSeleccionado: number = 0;

  cambioValor(evento: any) {
    this.valorSeleccionado = parseInt(evento.target.value);
    console.log(this.valorSeleccionado);
  }

  cantAgregar() {
    if (this.usuarioLogueado) {
      this.articulosFirebase.subscribe((articulo) => {
        if (articulo) {
          this.carritoService.agregarItem(articulo, this.valorSeleccionado);
          console.log("se agrega carrito");
        }
      });
    } else {
      this.mostrarToast("Debes iniciar sesión para agregar artículos al carrito.");
    }
  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastCtrl.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
