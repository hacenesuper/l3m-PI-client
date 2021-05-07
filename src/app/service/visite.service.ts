import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Visite } from '../modele/visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

  constructor(private http: HttpClient) { }

   private _refreshvisite=new Subject<void>();
   get refreshvisite(){
     return this._refreshvisite;
   }
  url = "http://localhost:5000/api/visites/";
  url2= "http://localhost:5000/api/visites/defi/";
  url3="http://localhost:5000/api/visites/visiteur/"
  getVisites(): Observable<Visite[]> {
    return this.http.get<Visite[]>(this.url);
  }
  getVisiteById(Id: string): Observable<Visite[]> {
    let params = new HttpParams();
    params.set("id", Id);
    return this.http.get<Visite[]>(this.url2+Id);
  }

  getVisiteBylogin(login: string): Observable<Visite[]> {

    return this.http.get<Visite[]>(this.url3+login);
  }
  creationVisite(visite:Visite): Observable<Visite> {

    return this.http.post<Visite>(this.url+visite.visite, visite);
   }

}
