import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public logueado : boolean;
  public usuario : any;
  constructor(private _service : AuthGuardService) {
    this.logueado = false
  }

  ngOnInit(): void {
  this.usuarioLogueado();
  }

  usuarioLogueado(){
    this._service.getInfoUsuarioLoggeado().subscribe(res=>{
      if(res != null){
        this.logueado = true;
        this.usuario = res;

      }
      else{
        this.logueado = false;
      }
     
    });
  }
}
