import { AuthInfo } from "../modele/AuthInfo";
import { Component, OnInit, NgZone, Output, EventEmitter, Input } from "@angular/core";
import { User } from "../modele/User";
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";

import { FormsModule } from '@angular/forms';
import { AutentificationService } from "../service/autentification.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
   login: string="";
   age: number=20;
  @Output() setLogin: EventEmitter<AuthInfo> = new EventEmitter();

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public authenticationService: AutentificationService
  ) {
    afAuth.user.subscribe(async (u:any) => {
      console.log("L’utilisateur Firebasse est ", u);
      // On contacte le serveur métier pour l'informer si un nouvel utilisateur existe :
      if (u !== null) {
        this.setLogin.emit({ isLogged:true, uid: u.uid, userName:u.displayName });
        const reponseServeur = await this.authenticationService
          .checkAuthentification(u)
          .subscribe((response) => {
            console.log(response);
          });
      }
    });
  }
  googleAuth() {
    this.authenticationService
      .AuthLogin(new firebase.auth.GoogleAuthProvider())
      .then((res: { user: { uid: any; displayName: any; }; }) => {
        this.setLogin.emit({ isLogged:true, uid: res.user.uid, userName:res.user.displayName });
      });
  }
  faceBookAuth() {
    this.authenticationService
      .AuthLogin(new firebase.auth.FacebookAuthProvider())
      .then((res: { user: { uid: any; displayName: any; }; }) => {
        this.setLogin.emit({ isLogged:true, uid: res.user.uid, userName:res.user.displayName });
      });
  }
  twitterAuth() {
    this.authenticationService
      .AuthLogin(new firebase.auth.TwitterAuthProvider())
      .then((res: { user: { uid: any; displayName: any; }; }) => {
        this.setLogin.emit({ isLogged:true, uid: res.user.uid, userName:res.user.displayName });
      });
  }
  log() {
    this.setLogin.emit({ isLogged:true,uid:"",  userName:this.login });
  }

  ngOnInit() {}
}
