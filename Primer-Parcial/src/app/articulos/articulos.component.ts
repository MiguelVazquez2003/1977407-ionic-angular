import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Articulos} from 'src/app/models/articulo.model';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  private coleccionFirebase: AngularFirestoreCollection<Articulos>;
  articulosFirebase: Observable<Articulos[]>;
  articuloDoc: any;

 constructor(private carritoService: ServicioCarritoService, private aFirestore:AngularFirestore,  private aFireStorage: AngularFireStorage) {
   this.coleccionFirebase = this.aFirestore.collection<Articulos>('articulos');
   this.articulosFirebase = this.coleccionFirebase.valueChanges({idField: 'id'});
   const ref = this.aFireStorage.storage;
 }

  ngOnInit(): void {
  }
  
  carro:number=0;
  agregarCarrito(){
    this.carro++;
  }

  
}

