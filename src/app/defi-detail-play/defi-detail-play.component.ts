import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Defi } from '../modele/defi';
import { Materiel } from '../modele/Materiel';
import { DefisService } from '../service/Defis.service';
import { MaterielService } from '../service/materiel.service';

@Component({
  selector: 'app-defi-detail-play',
  templateUrl: './defi-detail-play.component.html',
  styleUrls: ['./defi-detail-play.component.scss']
})
export class DefiDetailPlayComponent implements OnInit {


  @Input()defiId: string ="D151";
 @Output() Page: EventEmitter<boolean> = new EventEmitter();
 @Output() defiIdChange: EventEmitter<string> = new EventEmitter();
 @Output() idvisite: EventEmitter<string> = new EventEmitter();
 @Output() iddefivisite: EventEmitter<string> = new EventEmitter();
 defi!:Defi;
 materials!:Observable<Materiel[]>;
 /*public defi: Defis={
   id:"",
   titre :"",
   datedecreation : new Date() ,
   description :"",
   datedemodification : new Date() ,
   type  :"",
   auteur :"",
   arret :"",
   codearret :"",
   motscles  :"",
   duree :"",
   prologue :"",
   points :1,
   epilogue:"",
 commentaires:"",};*/
   constructor(private defiserver:DefisService,private materialservice:MaterielService) { }


   ngOnInit(): void {

 this.defiserver.getDefiByIdDefi(this.defiId).subscribe((data=>{this.defi=data;console.log(this.defi)}


   ));
   this.materials= this.materialservice.getMaterielByIdDefi(this.defiId);

   }
   ngOnChange(): void {

    this.defiserver.getDefiByIdDefi(this.defiId).subscribe((data=>{this.defi=data;console.log(this.defi)}


      ))

      }

   setPage(){
 this.Page.emit(false);

   }
   setPage2(id:string){
    this.defiIdChange.emit(id);

      }
      setPage3(id:string){
        this.idvisite.emit(id);

          }
          setPage4(id:string){
            this.iddefivisite.emit(id);

              }

}
