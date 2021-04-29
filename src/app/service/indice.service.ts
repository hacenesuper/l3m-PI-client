import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indice } from '../modele/Indice';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:5000/api/indices/";
  getIndices(): Observable<Indice[]> {
    return this.http.get<Indice[]>(this.url);
  }
  getIndicesByIdDefi(IdDefi: string): Observable<Indice[]> {

    return this.http.get<Indice[]>(this.url+IdDefi);
  }



  getIndiceByLabel(IdDefi: string,label:number): Observable<Indice> {

    return this.http.get<Indice>(this.url+IdDefi+"/"+label);
  }






  updateIndice(indice:Indice) : Observable<Indice> {
    return this.http.put<Indice>(this.url+indice.id+"/"+indice.label,indice);
  }



  creationIndice(indice: Indice): Observable<Indice> {

   return this.http.post<Indice>(this.url+indice.label, indice);
  }


  deleteIndice(indice:Indice) : Observable<void> {
    return this.http.delete<void>(this.url+indice.id+"/"+indice.label);
  }
}
