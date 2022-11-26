import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ServicioCarritoService } from '../services/servicio-carrito.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Articulos} from 'src/app/models/articulo.model';
import { Pedido } from '../models/pedido.model';
import { AlertController, ToastController } from '@ionic/angular';
import { FirestoreService } from '../services/firestore.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
  id:number;
  articulo:Articulos;
  cantidad:number=0;
  @Input() item:Pedido;
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();

  private coleccionFirebase: AngularFirestoreCollection<Articulos>;
  articulosFirebase: Observable<Articulos[]>;
  articuloDoc: any;
  categoria: string = this.ruta.snapshot.params['categoria'];

 constructor(private router: Router, private ruta: ActivatedRoute,private toastCtrl:ToastController,private firestor:FirestoreService,public carritoService: ServicioCarritoService, private aFirestore:AngularFirestore,  private aFireStorage: AngularFireStorage,private alertCtrl: AlertController) {
   this.coleccionFirebase = this.aFirestore.collection<Articulos>('articulos');
   this.articulosFirebase = this.coleccionFirebase.valueChanges({idField: 'id'});
   const ref = this.aFireStorage.storage;
   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
 }

  ngOnInit(): void {

  }
  agregarCarrito(){
    this.carritoService.agregarItem(1);
    console.log("se agrego al carrito")
  }
  

  
}

