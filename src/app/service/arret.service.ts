import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';
import { Arret, FeatureArret, FeatureArretCollection } from '../modele/Arret';

@Injectable({
  providedIn: 'root'
})
export class ArretService {
private url="http://localhost:5000/api/arrets/";
  constructor(private http: HttpClient) { }
  toutLesarret(): Observable<FeatureArret[]> {
    return this.http.get<FeatureArretCollection>('https://data.mobilites-m.fr/api/bbox/json?types=arret').pipe(

      map( fc => fc.features.filter( f => f.geometry?.type === 'Point' ) ),
      tap( ), // Pour voir dans la console
      share() // Observable cold => hot, on ne réplique pas la chaine de transfo pipe quand on s'abonne
    );
  }
  getArretByCode(codearret: string): Observable<Arret> {
    let params = new HttpParams();
    params.set("codearret", codearret);
    return this.http.get<Arret>(this.url+"?codearret="+codearret);
  }

  getArrets(): Observable<Arret[]> {
    return this.http.get<Arret[]>(this.url);
  }


}
