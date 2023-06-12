import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Articulos } from '../models/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {
  private carrito: { [categoria: string]: Articulos[] } = {};
  private sujeto = new BehaviorSubject<{ [categoria: string]: Articulos[] }>({});

  get sujeto$() {
    return this.sujeto.asObservable();
  }

  agregarItem(articulo: Articulos, cantidad: number) {
    const categoria = articulo.categoria;
    if (!this.carrito[categoria]) {
      this.carrito[categoria] = [];
    }

    const espacioDisponible = 20 - this.calcularCantidadTotal();
    const cantidadAgregar = Math.min(cantidad, espacioDisponible);

    for (let i = 0; i < cantidadAgregar; i++) {
      this.carrito[categoria].push(articulo);
    }

    this.sujeto.next(this.carrito);
  }

  eliminarItem(categoria: string, index: number) {
    if (this.carrito[categoria]) {
      this.carrito[categoria].splice(index, 1);
      this.sujeto.next(this.carrito);
    }
  }

  obtenerCarrito() {
    return this.carrito;
  }

  calcularCantidadTotal() {
    let total = 0;
    for (const categoria in this.carrito) {
      total += this.carrito[categoria].length;
    }
    return total;
  }
}
