import { VisiteService } from './../service/visite.service';
import { IndiceService } from './../service/indice.service';
import { QuestionService } from './../service/question.service';
import { DefisService } from './../service/Defis.service';
import { Component, Input, OnInit } from '@angular/core';

import { Defi } from '../modele/defi';
import { Indice } from '../modele/Indice';
import { Question } from '../modele/Question';
import { Visite } from '../modele/visite';
import {MatCardModule} from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Reponse {

  reponse: string,
   type: string;}
@Component({
  selector: 'app-dovisite',
  templateUrl: './dovisite.component.html',
  styleUrls: ['./dovisite.component.scss']
})
export class DovisiteComponent implements OnInit {
@Input() iddefi!:string ;
@Input() visiteur!:string ;
@Input() defi!:Defi;
@Input() indices!:Indice[];
@Input() questions!:Question[];
  mode!:string;
  visite:Visite={
    id : "",//input
    visite :"", //generer
  visiteur : "",//input
  datedevisite : new Date(), //generer
  mode : "" ,//choix
  statut:"" ,// reponse au qeustion dans un temps impartie
  score : 0 ,//calculer
  temps : "" ,//generer avec un timer
  commentaires :"" // input


  }
  pointsnegative:number=0 ;
  points!:number;

description :string[]=[]
desc:string=""
i:number=0
indicesReveles: boolean[] = [];
reponse:Reponse[]=[]
visiteListe:Visite[]=[]
  constructor(private DefisService:DefisService, private indiceservice:IndiceService ,private QuestionService:QuestionService,private visiteservice:VisiteService) { }

  ngOnInit() {
    this.visiteservice.getVisites().subscribe((d) => {
      this.visiteListe = d; });
    this.initreponse(this.questions)
    this.getdescription()
    this.initIndicesReveles(this.indices)
    console.log(this.description)
    this.desc=this.desc+this.description[this.i]
  }
getdescription(){

 this.description= this.defi.description.split(" - ")
}
adddesc(){
  this.i++;
  if(this.description[this.i]!=null)
this.desc=this.desc+"   *****"+this.i.toString() +"****    "+this.description[this.i]
console.log(this.desc)}

revelationIndice(indice:Indice, index:number){
  if (this.indicesReveles[index] === true){
    this.pointsnegative=this.pointsnegative+indice.points
    console.log(this.pointsnegative)
    this.indicesReveles[index] = false;
  }

}
initIndicesReveles(indice:Indice[] | undefined):void{
  this.indicesReveles = [];
  indice?.forEach(elem =>{
    this.indicesReveles.push(true);
  });
  console.log(this.indicesReveles);
}
initreponse(question:Question[]):void{
  this.reponse = [];
  question?.forEach(elem =>{
    this.reponse.push({reponse:"",type:elem.type});
  });

}
setmode(mode:string){
  this.mode=mode
}
score():number{
  let s:number=0
this.questions.forEach(
  (e,i)=>{  if(e.secrets==this.reponse[i].reponse)  {s=s+e.points}      }
)
return s-this.pointsnegative
}
genereNumeroAleatoire(maxlimite: number, minilimite: number): string {


  let res = minilimite + (Number)(Math.random() * ((maxlimite - minilimite) + 1));
  return res.toFixed();
}

genereNId(): string {
  let exists: boolean = true;
  let idString: string = this.genereNumeroAleatoire(999, 100);
  idString = this.iddefi+"-V"+ idString;
  let m = 0;
  while (exists == true) {
    while (m < this.visiteListe.length && !(this.visiteListe[m].visite == idString)) {



      m++;
    }
    if (m < this.visiteListe.length) {
      exists = true;
    }
    else {
      exists = false;

    }

  }

  return idString;
}
sendvisite(){
this.visite.visiteur=this.visiteur
this.visite.id=this.iddefi
this.visite.mode=this.mode
this.visite.statut="Répondu"
this.visite.score=this.score()
this.visite.temps="3min"
this.visite.visite=this.genereNId()

this.visiteservice.creationVisite(this.visite).subscribe((x)=>console.log("la visite crée",x));


}}
