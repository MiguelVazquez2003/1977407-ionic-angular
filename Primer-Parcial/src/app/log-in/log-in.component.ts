import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/authguard.service';
import { ToastController } from '@ionic/angular';
import lottie from 'lottie-web';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  @ViewChild("cajamail") cajamail!: ElementRef;
  @ViewChild("cajapassword") cajapassword!: ElementRef;

  constructor(
    private _auth: AuthGuardService,
    private _router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit(): void {
    this.loadLottieAnimation();
  }

  async logIn(): Promise<void> {
    const mail = this.cajamail.nativeElement.value;
    const contra = this.cajapassword.nativeElement.value;
    try {
      const userCredential = await this._auth.login(mail, contra);
      if (userCredential) {
        this._router.navigate(['perfil']);
      } else {
        this.showToast('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      }
    } catch (error) {
      console.log(error);
      this.showToast('Error al iniciar sesión. Por favor, inténtalo nuevamente.');
    }
  }

  registro(): void {
    this._router.navigate(['/registro']); // Redirigir al componente "Registro"
  }

  loadLottieAnimation(): void {
    const animationContainer = document.getElementById('lottieContainer');
    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/imagenes/animacion.json' // Ruta al archivo JSON de la animación Lottie
      });
    }
  }

  async logInGoogle(): Promise<void> {
    const mail = this.cajamail.nativeElement.value;
    const contra = this.cajapassword.nativeElement.value;
    try {
      const userCredential = await this._auth.loginGoogle(mail, contra);
      if (userCredential) {
        this._router.navigate(['perfil']);
      } else {
        this.showToast('Error al iniciar sesión con Google. Por favor, verifica tus credenciales.');
      }
    } catch (error) {
      console.log(error);
      this.showToast('Error al iniciar sesión con Google. Por favor, inténtalo nuevamente.');
    }
  }

  async showToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // Duración del mensaje en milisegundos
      position: 'bottom' // Posición del mensaje en la pantalla ('top', 'bottom', 'middle')
    });
    toast.present();
  }
}
