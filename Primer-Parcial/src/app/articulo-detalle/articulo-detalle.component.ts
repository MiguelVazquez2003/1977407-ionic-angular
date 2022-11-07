import { Component, OnInit, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';

export interface articuloDetalle{
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  reviews: string[]; 
}

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css'],
})
export class ArticuloDetalleComponent implements OnInit{
  meta:Observable<any>
  private documentoFirebase: AngularFirestoreDocument<articuloDetalle>
  articulosFirebase: Observable<articuloDetalle|undefined>;

  idArticulo: string=this.ruta.snapshot.params['id'];
  constructor(private ruta:ActivatedRoute,private carritoService: ServicioCarritoService,private aFirestore:AngularFirestore, private storage : AngularFireStorage) { 
    this.documentoFirebase=aFirestore.doc<articuloDetalle>('articulos/'+this.idArticulo);
    this.articulosFirebase=this.documentoFirebase.valueChanges({idField:'id'});
    const ref = this.storage.ref('articulos');
    this.meta = ref.getMetadata();
  }

  ngOnInit(): void {
   
  }


carro : number = 0;
cantidad: number = 1;
@Output() carroCopia: number = 0;

agregarCarrito(){
  
  let total = this.carro + this.cantidad;
  this.carro = total;
}

seleccionarCantidad(ev: any){
  this.cantidad = parseInt(ev.target.value);
}

}
