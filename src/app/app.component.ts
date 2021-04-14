import { async } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { OSM_TILE_LAYER_URL } from '@yaga/leaflet-ng2';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AuthInfo ,User} from './utilisateur';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  dataIconGoogle = 'assets/images/iconGoogle.png';
  iconMarker =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/585px-Map_marker.svg.png';
  tileLayerUrl = OSM_TILE_LAYER_URL;

  age:number=20;
  @Output() setLogin: EventEmitter<AuthInfo> = new EventEmitter();
  constructor(public auth: AngularFireAuth, private HttpClient:HttpClient )
 {

    auth.user.subscribe(async (u : any) => {

      console.log("L’utilisateur Firebasse est ", u);
      console.log("*************** ", u.displayName);
      // On contacte le serveur métier pour l'informer si un nouvel utilisateur existe :
      if (u !== null) {
        const reponseServeur = await this.POST("https://httpbin.org-echo.com/post", {
         username: u.displayName,age :this.age.toString()
        }).catch((err) => {
          console.log(err);
        });
        console.log("Le serveur répond", reponseServeur);
      }

    });
  }

  POST(
    url: string,
    params: { [key: string]: string }
  ): Promise<HttpResponse<string>> {
    const P = new HttpParams({ fromObject: params });
    return this.HttpClient
      .post(url, P, {
        observe: "response",
        responseType: "text",
        headers: { "content-type": "application/x-www-form-urlencoded" },
      })
      .toPromise();
  }


  login(): void {
    const provider = new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({
      prompt: 'select_account',
    });

    this.auth.signInWithPopup(provider).then((res) => {
      this.setLogin.emit({ uid: res?.user?.uid });
    });

  }

  logout(): void {
    this.auth.signOut();

  }
}
