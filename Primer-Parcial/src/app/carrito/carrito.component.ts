import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioCarritoService } from '../services/servicio-carrito.service';
import { Articulos } from '../models/articulo.model';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  carrito$: Observable<{ [categoria: string]: Articulos[] }>;

  constructor(private carroService: ServicioCarritoService) {
    this.carrito$ = carroService.sujeto$;
  }

  ngOnInit(): void {
  }

  eliminarItem(categoria: string, index: number) {
    this.carroService.eliminarItem(categoria, index);
  }

  obtenerCategorias(carrito: { [categoria: string]: Articulos[] }): string[] {
    return Object.keys(carrito);
  }
}
