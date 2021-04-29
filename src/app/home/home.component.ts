import { DefisService } from './../service/Defis.service';
import { ArretService } from './../service/arret.service';
import { Defi } from './../modele/defi';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthInfo } from "../modele/AuthInfo";
import { AutentificationService } from '../service/autentification.service';
import { FeatureArret } from '../modele/Arret';

@Component({
  selector: "app-home",
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  detail=false;
  step: number=0;
  iddefi:string="";
  arret:FeatureArret[]=[]
  defi:Defi[]=[]
  authInfo: AuthInfo = {
    isLogged: false,
    uid:"",
    userName:""

  };


  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public authenticationService: AutentificationService,
      public arretservice:ArretService,
      public defiservice:DefisService
  ) {
    afAuth.user.subscribe( (u:any) => {
      console.log("L’utilisateur Firebasse est ", u);


    });
  }



  setConnexion(auth: AuthInfo) {
    this.authInfo = auth;
    this.step = 1;
  }
  setStep(step: number) {
    if (step === 6) {
      this.logout();
      this.authInfo.isLogged = false;
      console.log(this.authInfo.isLogged)

      }



    this.step = step;
  }
  setarretToDisplay() {
    this.arretservice.toutLesarret().subscribe((a: FeatureArret[]) => {
      this.arret = a;

    });
  }
  setdefisToDisplay() {
    this.defiservice.getDefis().subscribe((d) => {
      this.defi = d;

    });
  }

  logout(): void {
    this.afAuth.signOut();

  }
//un set defi to display pour aller vers defi
setiddefi(iddefi: string) {
  this.iddefi = iddefi;
  this.detail=true;

}
setdetail(b:boolean) {
this.detail=b;

}
setidittodesplay(b:string) {
  this.iddefi=b
  this.step=3;

  }
  ngOnInit() {
    this.setarretToDisplay();
    this.setdefisToDisplay();
    this.step = 1;


  }
}

