import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Defi } from '../modele/defi';

@Injectable({
  providedIn: 'root'
})
export class DefisService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/api/defis/";
  getDefis(): Observable<Defi[]> {
    return this.http.get<Defi[]>(this.url);
  }
  getDefiByIdDefi(IdDefi: string): Observable<Defi> {

    return this.http.get<Defi>(this.url+IdDefi);
  }

  updateDefi(defi:Defi) : Observable<Defi> {
    return this.http.put<Defi>(this.url+defi.id,defi);
  }



  creationDefi(defi: Defi): Observable<Defi> {


    return this.http.post<Defi>(this.url+defi.id,defi);
  }

  deleteDefi(defi:Defi) : Observable<void> {
    return this.http.delete<void>(this.url+defi.id);
  }



}
