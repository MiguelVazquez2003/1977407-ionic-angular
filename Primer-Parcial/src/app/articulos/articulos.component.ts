import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  articulos: any = [
    {
      id:1,
      nombre:"Audifonos de casco",
      precio: 200,
      imagen: 'assets/imagenes/audifono1.jpg',
      reviews: [
        'Muy buenos audifonos. Me funcionaron perfectamente','El vendedor no me quiso realizar la devolucion, pesimo serivico'
      ]
    },
    {
      id:2,
      nombre:"Audifonos inalambricos",
      precio: 100,
      imagen: 'assets/imagenes/audifono2.jpg',
      reviews: [
        'Interesante.Muy practicos','Muy buenos'
      ]
    },
    {
      id:3,
      nombre:"Camisa de vestir",
      precio: 250,
      imagen: 'assets/imagenes/camisa.jpg',
      reviews: [
        'Muy elegante.','Casual y buena para la ocasion'
      ]
      
    },
    {
      id:4,
      nombre:"MacBook",
      precio: 15000,
      imagen: 'assets/imagenes/computadora.jpg',
      reviews: [
        'Un poco lenta','Buena eleccion'
      ]
    },
    {
      id:5,
      nombre:"Computadora de escritorio",
      precio: 12000,
      imagen: 'assets/imagenes/computadora2.jpg',
      reviews: [
        'Muy buena computadora','El empaque llego muy lastimado'
      ]
    },
    {
      id:6,
      nombre:"Escritorio con cajones",
      precio: 5000,
      imagen: 'assets/imagenes/escritorio1.jpg',
      reviews: [
        'Me parece que necesita mucho espacio','Ideal para tareas'
      ]
    },
    {
      id:7,
      nombre:"Escritorio",
      precio: 2500,
      imagen: 'assets/imagenes/escritorio2.jpg',
      reviews: [
        'Muy simple','Cumple con su cometido, aunque no es increible'
      ]
    },
    {
      id:8,
      nombre:"Balon Futtre de colores",
      precio: 250,
      imagen: 'assets/imagenes/futtre1.jpg',
      reviews: [
        'De los mejores balones de futbol','Muy lindo balon'
      ]
    },
    {
      id:9,
      nombre:"Balon de color verde",
      precio: 100,
      imagen: 'assets/imagenes/futtre2.jpg',
      reviews: [
        'Lo barato sale caro. No aguanto ni una reta','Muy malo, parece una pelota'
      ]
    },
    {
      id:10,
      nombre:"Laptop",
      precio: 10000,
      imagen: 'assets/imagenes/laptop1.jpg',
      reviews: [
        'Buena','Muy mala'
      ]
    },
    {
      id:11,
      nombre:"Laptop reacondicionada",
      precio: 5000,
      imagen: 'assets/imagenes/laptop2.png',
      reviews: [
        'excelente','Para ser reacondicionada, es excelente'
      ]
    },
    {
      id:12,
      nombre:"Laptop usada",
      precio: 15000,
      imagen: 'assets/imagenes/laptop3.jpg',
      reviews: [
        'Muy mala','Veremos que tal funciona'
      ]
    },
    {
      id:13,
      nombre:"Mesa de poker",
      precio: 2000,
      imagen: 'assets/imagenes/mesapoker.jpg',
      reviews: [
        'Fantastica','Queda a deber'
      ]
    },
    {
      id:14,
      nombre:"Celular MOTOROLA G7",
      precio: 1500,
      imagen: 'assets/imagenes/motorola.jpg',
      reviews: [
        'La bateria le dura mas de 8 horas en uso','Muy buen celular'
      ]
    },
    {
      id:15,
      nombre:"PSP",
      precio: 2000,
      imagen: 'assets/imagenes/psp.png',
      reviews: [
        'La nostalgia me invadio','Me trae muy buenos recuerdos'
      ]
    },
    {
      id:16,
      nombre:"Reloj ",
      precio: 2000,
      imagen: 'assets/imagenes/reloj2.jpg',
      reviews: [
        'Excelente reloj','El envio llego muy tarde. Mal servicio'
      ]
    },
    {
      id:17,
      nombre:"Reloj personalizado de Minecraft",
      precio: 500,
      imagen: 'assets/imagenes/relojminecraft.jpg',
      reviews: [
        'Le gusto mucho a mi hijo pequeño','Ideal para niños'
      ]
    },
    {
      id:18,
      nombre:"Samsung Grand Prime",
      precio: 1000,
      imagen: 'assets/imagenes/samsung1.jpg',
      reviews: [
        'Un celular muy antiguo','Lastimosamente su calidad ya no es buena en la actualidad'
      ]
    },
    {
      id:19,
      nombre:"Tennis Nike",
      precio:2000,
      imagen: 'assets/imagenes/tenis1.jpg',
      reviews: [
        'Muy bonitos, para salir a reuniones','Ojala vendan en diferentes colores'
      ]
    },
    {
      id:20,
      nombre:"XBOX ONE",
      precio: 4000,
      imagen: 'assets/imagenes/xboxone.jpg',
      reviews: [
        'Grandioso','Me encanto'
      ]
    }
  ];
  carro:number=0;
  agregarCarrito(){
    this.carro++;
  }
}

