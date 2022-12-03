import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public logueado : boolean;
  public usuario : any;
  constructor(private _service : AuthGuardService, private _router : Router) {
    this.logueado = false;
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

logOut():void{
  this._service.logOut().then(res => {
    this.logueado = false;
    this._router.navigate(["/"]);
  });
}
}
