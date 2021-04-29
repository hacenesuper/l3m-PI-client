import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { empty } from 'rxjs';
import { Arret } from '../modele/Arret';
import { Defi } from '../modele/defi';
import { Indice } from '../modele/Indice';
import { Question } from '../modele/Question';
import { ArretService } from '../service/arret.service';
import { DefisService } from '../service/Defis.service';
import { IndiceService } from '../service/indice.service';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-creationdefi',
  templateUrl: './creationdefi.component.html',
  styleUrls: ['./creationdefi.component.scss']
})
export class CreationdefiComponent implements OnInit {
  @Output() setStep: EventEmitter<number> = new EventEmitter();
  public deficree: Defi = {
    id: "",
    titre: "",
    datedecreation: new Date(),

    //dateNull??
    datedemodification:new Date() ,
    description: "",

    type: "",
    auteur: "",
    arret: "",
    codearret: "",
    motscles: "",
    duree: "",
    prologue: "",
    points: 1,
    epilogue: "",
    commentaires: "",
  };
  public defisListe: Defi[] = [];

  public arrets: Arret[] = [];


  public questions: Question[]=[];
  //public question!: Question;


  public indices: Indice[] = [];
  public indice!: Indice;








  constructor(private defiservice: DefisService, private arretservice: ArretService, private questionservice: QuestionService, private indiceservice: IndiceService) { }

  ngOnInit(): void {
/*
    this.arretservice.getArrets().subscribe((data1 => this.arrets = data1));
    this.defiservice.getDefis().subscribe((data2 => this.defisListe = data2));*/

  }




  ajouterDefi() {
    this.deficree.id=this.genereNId();
    let pointTotal=0;

   this.questions.forEach((q,i)=>{
    q.id=this.deficree.id;
    q.label=i+1;
    pointTotal=pointTotal+q.points;
    this.questionservice.creationQuestion(q).subscribe();
  });


  this.indices.forEach((n,v)=>{
    n.id=this.deficree.id;
    n.label=v+1;
this.indiceservice.creationIndice(n).subscribe();
});

this.deficree.points=pointTotal;
this.deficree.datedecreation=new Date();
//Arret et code
this.arrets.forEach((a)=>{
  if (a.Arret=this.deficree.arret){
    this.deficree.codearret=a.Codearret;
  };
});

this.defiservice.creationDefi(this.deficree).subscribe(x=>console.log("le defi crée",x));




  }



  taillequestion(n: string) {

    this.questions = [];

   for (let i = 0; i <Number(n) ; i++) {
      this.questions[i]={id:'',label:9,description: '',secrets:'',points:0};
      console.log("Questions",this.questions);

    }
  }

  tailleindice(n: string) {

    this.indices = [];
    for (let i = 0; i < (Number(n)); i++) {
      this.indices[i]={id:'',label:9,description: '',points:0};
      console.log("indice",this.indices);


    }

  }

  genereNumeroAleatoire(maxlimite: number, minilimite: number): string {


    let res = minilimite + (Number)(Math.random() * ((maxlimite - minilimite) + 1));
    return res.toFixed();
  }

  genereNId(): string {
    let exists: boolean = true;
    let idString: string = this.genereNumeroAleatoire(999, 100);
    idString = "D" + idString;
    let m = 0;
    while (exists == true) {
      while (m < this.defisListe.length && !(this.defisListe[m].id == idString)) {



        m++;
      }
      if (m < this.defisListe.length) {
        exists = true;
      }
      else {
        exists = false;

      }


    }

    return idString;
  }




  trackByIndex(index: number, question: Question): number {
    return index;
  }




  setsetStep(setStep: number) {
    this.setStep.emit(setStep);

  }}
