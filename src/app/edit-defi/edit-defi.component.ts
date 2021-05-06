import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterielService } from '../materiel.service';
import { Arret, FeatureArret } from '../modele/Arret';
import { Defi } from '../modele/defi';
import { Indice } from '../modele/Indice';
import { Materiel } from '../modele/Materiel';
import { Question } from '../modele/Question';
import { Urllien } from '../modele/Url';
import { ArretService } from '../service/arret.service';
import { DefisService } from '../service/Defis.service';
import { IndiceService } from '../service/indice.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-edit-defi',
  templateUrl: './edit-defi.component.html',
  styleUrls: ['./edit-defi.component.scss']
})
export class EditDefiComponent implements OnInit {

 @Input() defiId: string ="D189";


  @Input() public parentData=0;
  @Output() Page: EventEmitter<number> = new EventEmitter();



  public defiedit!: Defi;
  public arrets:Arret[]=[];
  public questions!:Question[];
  public indices!:Indice[];
  materials:Materiel[]=[];
  fichierUrl!: Observable<string>;
  featuresarret!:Observable<FeatureArret[]>;
  verifieMateriel:string="";
  public urls:Urllien[]=[];








  constructor(private defiservice:DefisService,private arretservice:ArretService,private questionservice: QuestionService,private indiceservice:IndiceService,private materialservice:MaterielService) {}

  ngOnInit(): void {
    this.indiceservice.getIndicesByIdDefi(this.defiId).subscribe((data3=>{this.indices=data3;
    console.log("Indices",this.indices)}));

    this.questionservice.getQuestionsByIdDefi(this.defiId).subscribe((data2=>{this.questions=data2;
    console.log("Questions",this.questions)}));

    this.defiservice.getDefiByIdDefi(this.defiId).subscribe((data=>{this.defiedit=data;
      console.log("le defi",this.defiedit)}));
    this.arretservice.getArrets().subscribe((data1=>this.arrets=data1));
     this.materialservice.getMaterielByIdDefi(this.defiId).subscribe(d=>{this.materials=d});
this.featuresarret=this.arretservice.toutLesarret();
console.log("ur",this.materials[0].ressource);



  }

  editdefi(){

let pointTotal:number=0;
this.questions.forEach((i)=>{
pointTotal=pointTotal+i.points;
this.questionservice.updateQuestion(i).subscribe();
})

this.indices.forEach((i)=>{
  this.indiceservice.updateIndice(i).subscribe();
  })

   // this.parentData=0;
//********mise à jour de code d'arret ************

this.arrets.forEach((a)=>{
  if (a.arret=this.defiedit.arret){
    this.defiedit.codearret=a.codearret;
  };
});

//-----------------
 //mettre le materiel et envoyer au serveur
 
 this.materials.forEach((i,v)=>{
  i.ressource=this.urls[v].url;
  i.type=this.urls[v].type;
  
  
      });
      //création de materiels
      this.materials.forEach((i,v)=>{this.materialservice.updateMateriel(i).subscribe()});


//------------
//associer l'Id reçu de la vu précédente
//this.defiedit.id=this.defiId;
//mise à jour de date de modification
this.defiedit.datedemodification=new Date();

                          this.defiedit.points=pointTotal;
    this.defiservice.updateDefi(this.defiedit).subscribe();

    console.log("Indices updated",this.indices);



    console.log("fin de la méthode");


     //implementer la méthode Setstep() pour sortir de la vu

  }


  setPage(page:number){

this.Page.emit(page);

  }

  


  choisirFichier(event: any,c:number) {

    this.verifieMateriel=event.target.files[0].type.substring(0,5)
    if(this.verifieMateriel=="video"){
      this.verifieMateriel="vidéo";
    }
    console.log(this.verifieMateriel);
    
  this.materialservice.choisirFichier(event).subscribe(x=> {this.urls[c]={url:x,type:this.verifieMateriel};
  this.materials[c].ressource=x});
  console.log("jj",this.urls);

  }


   uploadFichier() {

/*this.fichierUrl=this.materialservice.uploadFichier();
this.fichierUrl.subscribe(x=>{console.log(x);/*
tritement*///});


alert("image uploaded");

  }

  do(s:string){
    this.defiedit.arret=s;
    console.log("arret",s);
  }

  trackByIndexM(index: number, material: Materiel): number {
    return index;
  }

}
