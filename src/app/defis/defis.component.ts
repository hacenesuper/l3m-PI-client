import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import{Defi} from '../modele/defi'
import { Arret } from '../modele/Arret';
import { ArretService } from '../service/arret.service';

@Component({
  selector: 'app-defis',
  templateUrl: './defis.component.html',
  styleUrls: ['./defis.component.scss']
})

export class DefisComponent implements OnInit {
  @Output() setdefiID: EventEmitter<string> = new EventEmitter();
  @Input() iddefi: string | undefined;
  obs!:Observable<Defi[]>
  obs1!:Observable<Defi[]>
  arrets!:Observable<Arret[]>



  constructor(private httpclient :HttpClient,private arretservice:ArretService) { }

  ngOnInit() {
    this.arrets=this.arretservice.getArrets()
    this.getdefi();
  }
  getdefi(){
    this.obs1=this.httpclient.get<any>("http://localhost:5000/api/defis/");
   this.obs=this.obs1
  }
  emite(id:string) {
    console.log(id)
    this.setdefiID.emit(id);
  }
filter(auteur:string){
  this.obs=this.obs1;

  console.log(auteur)
 this.obs= this.obs.pipe(map( d => d.filter( f => (f.auteur == auteur ) )))
}
do(arret:string){
  this.obs=this.obs1;

  console.log(arret)
 this.obs= this.obs.pipe(map( d => d.filter( f => (f.arret == arret ) )))
}
all(){
  this.obs=this.obs1;
}
}
