import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Articulos } from 'src/app/models/articulo.model';
import { Observable } from 'rxjs';
import { FirestorageService } from 'src/app/services/firestorage.service';
import { ServicioCarritoService } from 'src/app/services/servicio-carrito.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  constructor(private route: Router) {

  }




  ngOnInit(): void {
  }

 
}



