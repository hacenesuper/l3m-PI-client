import { Visite } from './../modele/visite';
import { VisiteService } from './../service/visite.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-visites',
  templateUrl: './visites.component.html',
  styleUrls: ['./visites.component.scss']
})
export class VisitesComponent implements OnInit {

  @Input() iddefi!:string;
    visite!: Observable<Visite[]>
  constructor(private visiteservice:VisiteService ) {}


  ngOnInit() {
 this.getvisite();


  }
  private getvisite(){
   this.visite= this.visiteservice.getVisiteById(this.iddefi)


  }
  trackByid(i:number ,e:Visite){
    return e.visite;

  }
}
