import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../services/authguard.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  ionicForm:FormGroup;
  @ViewChild("cajamail") cajamail! : ElementRef;
  @ViewChild("cajapassword") cajapassword! : ElementRef;

  constructor(private _auth : AuthGuardService, private _router: Router) { }

  ngOnInit(): void {
  }

  logIn():void{
    var mail = this.cajamail.nativeElement.value;
    var contra = this.cajapassword.nativeElement.value;
    this._auth.login(mail, contra).then(res=> {
      console.log(res);
      this._router.navigate(['perfil']);
    });
  }

  logInGoogle():void{
    var mail = this.cajamail.nativeElement.value;
    var contra = this.cajapassword.nativeElement.value;
    this._auth.loginGoogle(mail, contra).then(res=>{
      console.log(res);
      this._router.navigate(['perfil']);
    });
  }
}
