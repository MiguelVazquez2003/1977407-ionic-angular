import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

  constructor() { }

  cantCarrito:number=0;

  private sujeto=new BehaviorSubject<number>(0);

  get sujeto$(){
    return this.sujeto.asObservable;
  }

  calcular(cantidad:number){
    this.cantCarrito
    =this.cantCarrito+cantidad;
    return this.cantCarrito;
  }

  agregar(a: number){
this.sujeto.next(this.calcular(a));
}

}
