import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { empty, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Arret, FeatureArret } from '../modele/Arret';
import { Defi } from '../modele/defi';
import { Indice } from '../modele/Indice';
import { Materiel } from '../modele/Materiel';
import { Question } from '../modele/Question';
import { Urllien } from '../modele/Url';
import { ArretService } from '../service/arret.service';
import { DefisService } from '../service/Defis.service';
import { IndiceService } from '../service/indice.service';
import { MaterielService } from '../service/materiel.service';
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
    distanciel:""
  };
  public defisListe: Defi[] = [];

  public arrets: Arret[] = [];


  public questions: Question[] = [];
  public materiels: Materiel[] = [];
  public urls:Urllien[]=[];
  codeobs!:Observable<string>;

  //public question!: Question;


  public indices: Indice[] = [];
  public indice!: Indice;
  fichierUrl!: Observable<string>;
  verifieMateriel:string="";
  material!:Materiel;
  featuresarret!:Observable<FeatureArret[]>;
  descriptionM:string="";









  constructor(private defiservice: DefisService, private arretservice: ArretService, private questionservice: QuestionService, private indiceservice: IndiceService,private materialservice:MaterielService) { }

  ngOnInit(): void {
    /*
        this.arretservice.getArrets().subscribe((data1 => this.arrets = data1));
        this.defiservice.getDefis().subscribe((data2 => this.defisListe = data2));*/
        this.featuresarret=this.arretservice.toutLesarret();

  }




  ajouterDefi() {
    this.deficree.id = this.genereNId();
    let pointTotal:number = 0;

    this.questions.forEach((q, i) => {
      q.id = this.deficree.id;
      q.label = i + 1
      pointTotal = +pointTotal + +q.points;
      console.log("nbrTOTAL",pointTotal)

      console.log("nbrTOTAL",pointTotal)
      this.questionservice.creationQuestion(q).subscribe();
    });


    this.indices.forEach((n, v) => {
      n.id = this.deficree.id;
      n.label = v + 1;
      if(n.points>(pointTotal/this.questions.length)){
        n.points=(pointTotal/this.questions.length)-3;

      }
      this.indiceservice.creationIndice(n).subscribe();
    });

    this.deficree.points = pointTotal;
    this.deficree.datedecreation = new Date();
    this.deficree.duree=this.deficree.duree+"mn";
    //Arret et code
    /*this.arrets.forEach((a) => {
      if (a.arret = this.deficree.arret) {
        this.deficree.codearret = a.codearret;
      };
    });*/
    //mettre le materiel et envoyer au serveur

    this.materiels.forEach((i,v)=>{
i.id=this.deficree.id;
i.label=v+1;
i.ressource=this.urls[v].url;
i.type=this.urls[v].type;


    });
    //création de materiels
    this.materiels.forEach((i,v)=>{this.materialservice.creationMateriel(i).subscribe()});
    //this.fichierUrl=this.materialservice.uploadFichier();
/*tritement*/
//creation défi

    this.defiservice.creationDefi(this.deficree).subscribe(x => console.log("le defi crée", x));
    console.log("defi",this.deficree)


alert("le defi a bien été crée");

  }



  taillequestion(n: string) {

    this.questions = [];

    for (let i = 0; i < Number(n); i++) {
      this.questions[i] = { id: '', label: 9, description: '', secrets: '', points: 0,type:"" };
      console.log("Questions", this.questions);


    }
  }


  tailleMateriels(n: string) {

    this.materiels= [];
    this.urls= [];


    for (let i = 0; i < Number(n); i++) {
      this.materiels[i] = { id: '', label: 0, description: '',ressource : '', type: "" };
      console.log("Materiels", this.materiels);

    }
  }


  tailleindice(n: string) {

    this.indices = [];
    for (let i = 0; i < (Number(n)); i++) {
      this.indices[i] = { id: '', label: 9, description: '', points: 0 };
      console.log("indice", this.indices);


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


  trackByIndexM(index: number, material: Materiel): number {
    return index;
  }


  setsetStep(setStep: number) {
    this.setStep.emit(setStep);

  }






  choisirFichier(event: any,c:number) {
    this.verifieMateriel=event.target.files[0].type.substring(0,5)
    if(this.verifieMateriel=="video"){
      this.verifieMateriel="vidéo";
    }
    console.log(this.verifieMateriel);

  this.materialservice.choisirFichier(event).subscribe(x=> this.urls[c]={url:x,type:this.verifieMateriel});

  console.log("jj",this.urls);


  }

/*
   uploadFichier() {
this.fichierUrl=this.materialservice.uploadFichier();
this.fichierUrl.subscribe(x=>{console.log(x);
tritement});
alert("image uploaded");
  }*/

  do(s:string){
    this.deficree.arret=s;
    console.log("arret",s);
    this.featuresarret.pipe(map( d =>{ d.filter( f => f.properties.LIBELLE == s );
    d.forEach((x)=>{if(x.properties.LIBELLE==s){
      this.deficree.codearret=x.properties.CODE;
    }})} )).subscribe(w=>console.log("code",w));
  }


}
