import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Arret, FeatureArret } from '../modele/Arret';
import { Defi } from '../modele/defi';
import { ArretService } from '../service/arret.service';
import { DefisService } from '../service/Defis.service';

@Component({
  selector: 'app-assistant-visit',
  templateUrl: './assistant-visit.component.html',
  styleUrls: ['./assistant-visit.component.scss']
})
export class AssistantVisitComponent implements OnInit {
  public defis!:Observable<Defi[]>;
  public arrets!:Observable<Arret[]>;
  public defispararret:Defi[]=[];
  public defispararret1:Defi[]=[];

  public arret:string="";


  constructor(private defiservice:DefisService,private httpclient:HttpClient,private arretservice:ArretService) { }

  ngOnInit() {
    this.arrets=this.arretservice.getArrets();
  }
   do(s:string){
    this.defispararret=[];
    this.defis=this.defiservice.getDefis()


   this.arret=s;
    /*this.defis.subscribe(x=>{x.forEach((v=>{if(this.arret==v.arret){
     this.defispararret.push(v);
   }}))})*/
   this.defis=this.defiservice.getDefis().pipe(map( d => d.filter( f => f.arret == this.arret ) ));

   
  
   console.log("the option is",s);
 }
}
