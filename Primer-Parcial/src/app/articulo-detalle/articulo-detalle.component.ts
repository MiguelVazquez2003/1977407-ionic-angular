import { Component, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ServicioCarritoService } from '../services/servicio-carrito.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Articulos } from '../models/articulo.model';
import { FirestoreService } from '../services/firestore.service';
import { Pedido } from '../models/pedido.model';
import { ToastController } from '@ionic/angular';




@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css'],
})
export class ArticuloDetalleComponent implements OnInit{
  cantidad:number;
  id:number;
  meta:Observable<any>
  private documentoFirebase: AngularFirestoreDocument<Articulos>
  articulosFirebase: Observable<Articulos|undefined>;
articulo:Articulos;
  idArticulo: string=this.ruta.snapshot.params['id'];
  constructor(private firestore:FirestoreService, private toastCtrl:ToastController,
    private ruta:ActivatedRoute,private carritoService: ServicioCarritoService,private aFirestore:AngularFirestore, private storage : AngularFireStorage) { 
    this.documentoFirebase=aFirestore.doc<Articulos>('articulos/'+this.idArticulo);
    this.articulosFirebase=this.documentoFirebase.valueChanges({idField:'id'});
    const ref = this.storage.ref('articulos');
    this.meta = ref.getMetadata();
  }

  


   ngOnInit(): void {
 
   }
   valorSeleccionado:number=0;

  cambioValor(evento:any){
    this.valorSeleccionado=parseInt(evento.target.value);
    console.log(this.valorSeleccionado);
  }

  cantAgregar(){
    this.agregarCarrito(this.valorSeleccionado);
  }

  agregarCarrito(cantidadDetalle:number){
    this.carritoService.agregarItem(cantidadDetalle);
    console.log("se agrega carrito")
  }
   
 
}
