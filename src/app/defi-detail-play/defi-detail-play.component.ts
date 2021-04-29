import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Defi } from '../modele/defi';
import { DefisService } from '../service/Defis.service';

@Component({
  selector: 'app-defi-detail-play',
  templateUrl: './defi-detail-play.component.html',
  styleUrls: ['./defi-detail-play.component.scss']
})
export class DefiDetailPlayComponent implements OnInit {

  @Input()defiId: string ="D151";
 @Output() Page: EventEmitter<boolean> = new EventEmitter();
 @Output() defiIdChange: EventEmitter<string> = new EventEmitter();
 defi!:Defi;
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
   constructor(private defiserver:DefisService) { }


   ngOnInit(): void {

 this.defiserver.getDefiByIdDefi(this.defiId).subscribe((data=>{this.defi=data;console.log(this.defi)}


   ))

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

}
