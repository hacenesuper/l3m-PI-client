import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { AppUser, User } from "../modele/User";

@Injectable({
  providedIn: 'root'
})
export class AutentificationService {


 url = "/api/authentification";
  headerDict = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };


  constructor(private http: HttpClient) {}

  checkAuthentification(user: User): Observable<User> {

  const params = new HttpParams()
    .set('clientToken', 'OK')
    .set('id',user.uid)
    .set('email',user.email)
    .set('photo',user.photoURL)
    .set('telephone', user.phoneNumber)
    .set('nom',user.displayName);
    return this.http.post<User>("/api/authentification", params.toString(), this.requestOptions);
  }
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return firebase.auth().signInWithPopup(provider)
      .then((res: any) => {
        console.log(res);
        return res;
      });
  }

  getUser(login: string): Observable<AppUser> {
    let params = new HttpParams();
    params.set("login", login);

    return this.http.get<AppUser>(this.url+login+"/");
  }
  updateUser(user: AppUser): Observable<AppUser> {

    const params = new HttpParams()

    .set('login',user.login)
    .set('age',user.age)
    .set('ville',user.ville)
    .set('description', user.description)

    return this.http.post<AppUser>("/api/authentification", params.toString(), this.requestOptions);  }

}
