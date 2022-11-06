import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ServicioCarritoService } from '../servicio-carrito.service';
export interface Articulo{
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  reviews: string[]; 
}
@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  private coleccionFirebase: AngularFirestoreCollection<Articulo>;
  articulosFirebase: Observable<Articulo[]>;
  articuloDoc: any;

 constructor(private carritoService: ServicioCarritoService, private aFirestore:AngularFirestore) {
   this.coleccionFirebase = this.aFirestore.collection<Articulo>('articulos');
   this.articulosFirebase = this.coleccionFirebase.valueChanges({idField: 'id'});
   this.articuloDoc=this.aFirestore.doc<Articulo>('/articulos/FSFcpLv6BQgxJawEm1Mg');
 }

  ngOnInit(): void {
  }
  
  carro:number=0;
  agregarCarrito(){
    this.carro++;
  }
}

