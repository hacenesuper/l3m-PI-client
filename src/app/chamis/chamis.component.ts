import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Chamis {
  constructor(public id:string,
    public age :string )
    {}
}
@Component({
  selector: 'app-chamis',
  templateUrl: './chamis.component.html',
  styleUrls: ['./chamis.component.scss']
})
export class ChamisComponent implements OnInit {

  chamis:Chamis[]= [];
  constructor(private httpclient :HttpClient) {

   }

  ngOnInit() {
    this.getchamis();
  }
getchamis(){
  this.httpclient.get<Chamis[]>("/assets/testserveur.json" ).subscribe(
    response => {
      this.chamis=response;

      console.log(this.chamis[1].age)
    }
  );

}
}
