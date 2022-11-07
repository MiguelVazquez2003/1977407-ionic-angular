import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ServicioCarritoService } from '../servicio-carrito.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
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

 constructor(private carritoService: ServicioCarritoService, private aFirestore:AngularFirestore,  private aFireStorage: AngularFireStorage) {
   this.coleccionFirebase = this.aFirestore.collection<Articulo>('articulos');
   this.articulosFirebase = this.coleccionFirebase.valueChanges({idField: 'id'});
   const ref = this.aFireStorage.storage;
 }

  ngOnInit(): void {
  }
  
  carro:number=0;
  agregarCarrito(){
    this.carro++;
  }

  progress : number | undefined;
  subirFoto(event: any){
    //Sube foto del input de File
    const archivo: File = event.target.files[0];
    console.log(archivo.name);

    const pathArchivo = `${archivo.name}` // ${this.articulo} // necesitamos un folder por articulo


    const task = this.aFireStorage.upload(pathArchivo, archivo);

     task.percentageChanges().subscribe(res => {
      this.progress = res;
     });


    task.snapshotChanges().subscribe();
  }
}

