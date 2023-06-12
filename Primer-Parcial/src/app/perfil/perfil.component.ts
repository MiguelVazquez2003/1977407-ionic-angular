import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';
import lottie from 'lottie-web'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public logueado: boolean;
  public usuario: any;
  public imgUrl: string = ''; // Nueva propiedad para almacenar la imagen de perfil

  constructor(private _service: AuthGuardService) {
    this.logueado = false;
    
  }
 

  ngOnInit(): void {
    this.usuarioLogueado();
    this.loadLottieAnimation(); // Agrega esta línea para cargar la animación de Lottie
  }

  loadLottieAnimation(): void {
    const animationContainer = document.getElementById('lottieContainer');
    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/imagenes/user.json' // Ruta al archivo JSON de la animación Lottie
      });
    }
  }
  usuarioLogueado() {
    this._service.getInfoUsuarioLoggeado().subscribe(res => {
      if (res != null) {
        this.logueado = true;
        this.usuario = res;
        this.imgUrl = this.usuario.photoURL || 'assets/imagenes/perfil.json'; // Obtener la imagen de perfil o usar una imagen por defecto
      } else {
        this.logueado = false;
      }
    });
  }
}
