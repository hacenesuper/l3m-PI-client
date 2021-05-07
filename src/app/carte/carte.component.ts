import { Defi } from './../modele/defi';
import { Component, Input, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { OSM_TILE_LAYER_URL, Point } from '@yaga/leaflet-ng2';
import { Observable } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';
import { DefisService } from '../service/Defis.service';
import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { FeatureArret } from '../modele/Arret';
export type GeoPoint = number[];
export interface GeometryMultiLineString {
  type: 'MultiLineString';
  coordinates: GeoPoint[][];
}

export interface FeatureLigneCollection {
  type: 'FeatureCollection';
  features: FeatureLigne[];
}

export interface FeatureLigne {
  type: 'Feature';
  geometry: GeometryMultiLineString;
  properties: {
    CODE: string; // "SEM_C1"
    COULEUR: string; // "253,234,0"
    COULEUR_TEXTE: string; // "0,0,0"
    LIBELLE: string; // "GRENOBLE Cité Jean Macé / MEYLAN Maupertuis"
    NUMERO: string; // "C1"
    PMR: number; // 1
    ZONES_ARRET: string[];
    id: string; // "SEM_C1"
    type: string; // "ligne" 'arret'
  };
}
export interface Geometry {
  type: 'Point';
  coordinates: GeoPoint;
}

export interface Featuredefis{
  defi:Defi;
  geometry:Geometry;
}


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {
  @Output() setdefiID: EventEmitter<string> = new EventEmitter();
 lignes = this.toutesLesLignes();
    @Input() arrets:FeatureArret[]=[];
      @Input() defis:Defi[]=[];
      defiarret:Featuredefis[]=[];
 iconsize: Point = new Point(50,80);
  tileLayerUrl = OSM_TILE_LAYER_URL;
  readonly iconMarker = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Map_marker.svg/585px-Map_marker.svg.png';
  readonly icondefi='https://cdn.icon-icons.com/icons2/1465/PNG/512/678gamedice_100992.png'
  constructor(private http: HttpClient) {
  }

  private toutesLesLignes(): Observable<FeatureLigne[]> {
    return this.http.get<FeatureLigneCollection>('https://data.metromobilite.fr/api/lines/json?types=ligne').pipe(
    // Ouch ils ont mis des lignes sans geométrie MultiLineString dans leur base... il faut bien filtrer...
      map( fc => fc.features.filter( f => f.geometry?.type === 'MultiLineString' ) ),
      tap( console.log ), // Pour voir dans la console
      share() // Observable cold => hot, on ne réplique pas la chaine de transfo pipe quand on s'abonne
    );
  }



  getdefiarret(){

   console.log("les defis",this.defis)
    //console.log("lesarret:",this.arrets)
    for (let i= 0; i<this.defis.length; i++) {
     for (let j= 0; j< this.arrets.length; j++) {

       if(this.defis[i].arret==this.arrets[j].properties.LIBELLE)
       {
         this.defiarret.push({defi:this.defis[i],geometry:this.arrets[j].geometry})
       }
     }

    }
  }
  emite(id:string) {
    console.log(id)
    this.setdefiID.emit(id);
  }
  trackByid(i:number ,e:Featuredefis){
    return e.defi.id;

  }
  ngOnInit(): void {

    this.getdefiarret();
    console.log(this.defiarret)
  }

}
