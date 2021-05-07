
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


 url = "http://localhost:5000/api/users/";
 appUser:AppUser={login:"yes",age:"",description:"",ville:""}
  headerDict = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  requestOptions = {
    headers: new HttpHeaders(this.headerDict)
  };


  constructor(private http: HttpClient) {}

  checkAuthentification(user: User): Observable<AppUser> {

  this.appUser.login=user.displayName

  this.appUser.age="20"
  this.appUser.ville=""
  this.appUser.description=""
  console.log(this.appUser+"voilaa lutilisateur ajouté")

    return this.http.post<AppUser>(this.url+this.appUser.login,this.appUser);
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
  updateUser(user: AppUser,login:string): Observable<AppUser> {

    //const params = new HttpParams()

    //.set('login',user.login)http://localhost:5000/api/users/
    //.set('age',user.age)
    //.set('ville',user.ville)
    //.set('description', user.description)

    //return this.http.post<AppUser>("http://localhost:5000/api/users/", params.toString(), this.requestOptions);  }
    return this.http.put<AppUser>(this.url+login,user);
}
creationchamis(chamis:AppUser): Observable<AppUser> {


  return this.http.post<AppUser>(this.url+chamis.login,chamis);
}
}
