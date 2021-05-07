import { Component, OnInit,Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Visite } from '../modele/visite';
import { VisiteService } from '../service/visite.service';

@Component({
  selector: 'app-myvisite',
  templateUrl: './myvisite.component.html',
  styleUrls: ['./myvisite.component.scss']
})
export class MyvisiteComponent implements OnInit {
@Input() login!:string


visite!: Observable<Visite[]>
constructor(private visiteservice:VisiteService ) {}


ngOnInit() {
this.getvisite();


}
private getvisite(){
this.visite= this.visiteservice.getVisiteBylogin(this.login)


}
}


