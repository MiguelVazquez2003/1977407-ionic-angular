import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

  constructor() { }

  cantCarrito:number=0;

  private sujeto = new BehaviorSubject<number>(0);

  get sujeto$(){
    return this.sujeto.asObservable();
  }

  calcularItem(cantidad:number){
    this.cantCarrito=this.cantCarrito+cantidad;
    return this.cantCarrito;
  }
  agregarItem(c:number){
    this.sujeto.next(this.calcularItem(c));
    console.log("servicio listo");
  }

}