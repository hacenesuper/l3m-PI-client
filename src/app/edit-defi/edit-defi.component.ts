import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Arret } from '../modele/Arret';
import { Defi } from '../modele/defi';
import { Indice } from '../modele/Indice';
import { Question } from '../modele/Question';
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

 @Input() defiId: string ="D151";


  @Input() public parentData=0;
  @Output() Page: EventEmitter<number> = new EventEmitter();



  public defiedit!: Defi;
  public arrets:Arret[]=[];
  public questions!:Question[];;
  public indices!:Indice[];;





  constructor(private defiservice:DefisService,private arretservice:ArretService,private questionservice: QuestionService,private indiceservice:IndiceService) {}

  ngOnInit(): void {
    this.indiceservice.getIndicesByIdDefi(this.defiId).subscribe((data3=>{this.indices=data3;
    console.log("Indices",this.indices)}));

    this.questionservice.getQuestionsByIdDefi(this.defiId).subscribe((data2=>{this.questions=data2;
    console.log("Questions",this.questions)}));

    this.defiservice.getDefiByIdDefi(this.defiId).subscribe((data=>{this.defiedit=data;
      console.log("le defi",this.defiedit)}));
    this.arretservice.getArrets().subscribe((data1=>this.arrets=data1));



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
  if (a.Arret=this.defiedit.arret){
    this.defiedit.codearret=a.Codearret;
  };
});
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

}
