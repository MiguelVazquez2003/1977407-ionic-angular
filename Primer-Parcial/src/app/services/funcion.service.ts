import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Articulos } from "../models/articulo.model";

@Injectable({
    providedIn:'root'
})

export class FuncionesService{
    constructor(private a:AngularFirestore){

    }

 addArticulo(articulo:Articulos)   {
    this.a.collection('articulos').doc().set({
        "nombre":articulo.nombre,
        "precio":articulo.precio,
        "imagen":articulo.imagen,
        "reviews":articulo.reviews
    }).then(resp=>{
        console.log(resp);
    }).catch((error)=>{console.log(error);
    })
 }
}