import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export class Defi {
  constructor(public iddefi:string,
    public titre :string ,
    public auteur:string,
    public date:string)
    {}
}
@Component({
  selector: 'app-defis',
  templateUrl: './defis.component.html',
  styleUrls: ['./defis.component.scss']
})

export class DefisComponent implements OnInit {
defi:Defi[]=[];
  constructor(private httpclient :HttpClient) { }

  ngOnInit() {
    this.getdefi();
  }
  getdefi(){
    this.httpclient.get<any>(' http://localhost:5000/api/users/' ).subscribe(
      response => {
        this.defi=response;
      }
    );
  }
}
