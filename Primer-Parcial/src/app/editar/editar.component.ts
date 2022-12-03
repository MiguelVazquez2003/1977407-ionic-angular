import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  @ViewChild("cajanombre") cajanombre! : ElementRef;
  fileName='';
   public imgUrl: string; // Dirección de imagen
  public newFile:File;
  constructor(private _service : AuthGuardService, private _router: Router) { }

  ngOnInit(): void {
  }

  modificar(){
   
    let nombre = this.cajanombre.nativeElement.value;
    let foto=('assets/imagenes/perfil.png')

   
    
    
    this._service.updateUsuario(nombre,foto).then(res => {
      console.log(res);
      this._router.navigate(['perfil']);
    });
  }
  
  

  
  

}
