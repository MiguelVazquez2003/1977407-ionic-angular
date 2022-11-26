import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ServicioCarritoService } from '../services/servicio-carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  carrito$:Observable<number>;
  constructor(private carroService:ServicioCarritoService) {
    this.carrito$ = carroService.sujeto$;
  }

  ngOnInit(): void {
  }

}