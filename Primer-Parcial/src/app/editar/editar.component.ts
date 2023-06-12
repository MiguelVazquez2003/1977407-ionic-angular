import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';
import { Router } from '@angular/router';
import { FirestorageService } from '../services/firestorage.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import lottie from 'lottie-web'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @ViewChild("cajanombre") cajanombre!: ElementRef;
  fileName = '';
  imgUrl: string = ''; // Dirección de imagen
  newFile: File | null = null;

  constructor(
    private _service: AuthGuardService,
    private _router: Router,
    private firestorage: FirestorageService,
    private aFireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.loadLottieAnimation();
  }
  loadLottieAnimation(): void {
    const animationContainer = document.getElementById('lottieContainer');
    if (animationContainer) {
      lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/imagenes/edit.json' // Ruta al archivo JSON de la animación Lottie
      });
    }
  }

  async modificar(): Promise<void> {
    let nombre = this.cajanombre.nativeElement.value;
    let foto = this.imgUrl ? this.imgUrl : 'assets/imagenes/perfil.png';
  
    // Subir imagen al servicio de almacenamiento
    if (this.newFile) {
      const path = 'Usuarios/'; // Ruta de la carpeta en la que se guardarán las fotos de los usuarios
      const name = this.newFile.name;
  
      (await this.firestorage
        .uploadImage(this.newFile, path, name)
        .then(() => {
          // Obtener la URL de la imagen subida
          return this.aFireStorage.ref(`${path}${name}`).getDownloadURL();
        }))
        .subscribe(url => {
          foto = url || 'assets/imagenes/perfil.png'; // Asignar la URL obtenida a la variable 'foto'
  
          // Actualizar el usuario con el nuevo nombre y la URL de la imagen
          this._service.updateUsuario(nombre, foto)
            .then(res => {
              console.log(res);
              this._router.navigate(['perfil']);
            })
            .catch(error => {
              console.log('Error:', error);
            });
        }, error => {
          console.log('Error:', error);
        });
    } else {
      // Si no se seleccionó una nueva imagen, actualizar el usuario con el nombre existente y la foto actual
      this._service.updateUsuario(nombre, foto)
        .then(res => {
          console.log(res);
          this._router.navigate(['perfil']);
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }
  

  onFileSelected(event: any): void {
    const files = event.srcElement?.files;
    if (files && files.length > 0) {
      this.newFile = files[0];
      this.fileName = this.newFile?.name || '';
    }
  }
}
