import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../services/authguard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _service : AuthGuardService, private _router : Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this._service.logOut();
    console.log("Deslogueado");
    this._router.navigate(["/"]);
  }

}
