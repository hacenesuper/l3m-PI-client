import { AppUser } from "../modele/User";
import { Component, OnInit, Input } from "@angular/core";

import { AutentificationService } from "../service/autentification.service"


@Component({
  selector: "app-profil",
  templateUrl: "./profil.component.html",
  styleUrls: ["./profil.component.scss"],
})
export class ProfilComponent implements OnInit {
  @Input()login!:string;
  user!: AppUser;

  constructor(public authenticationService: AutentificationService) {}

  ngOnInit() {
    this.authenticationService.getUser(this.login).subscribe((currentUser) => {
      this.user = currentUser;
    });
  }
  updateProfil() {
    this.authenticationService.updateUser(this.user).subscribe((user) => {
      console.log("updated successfully");
    });
  }
}
