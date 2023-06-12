import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  @ViewChild("cajamail") cajamail! : ElementRef;
  @ViewChild("cajapassword") cajapassword! : ElementRef;

  constructor(
    private _auth: AuthGuardService,
    private _router: Router,
    private toastController: ToastController
  ) { }

  ngOnInit(): void {
  }

  async registro(): Promise<void> {
    const email = this.cajamail.nativeElement.value;
    const password = this.cajapassword.nativeElement.value;

    try {
      const userCredential = await this._auth.registro(email, password);
      if (userCredential) {
        console.log(userCredential);
        this._router.navigate(['perfil']);
      } else {
        this.presentToast('No se pudo realizar el registro. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      console.error(error);
      this.presentToast('Error durante el registro. Por favor, inténtalo nuevamente.');
    }
  }

  async presentToast(message: string): Promise<void> {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
