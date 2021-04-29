import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import{Defi} from '../modele/defi'

@Component({
  selector: 'app-defis',
  templateUrl: './defis.component.html',
  styleUrls: ['./defis.component.scss']
})

export class DefisComponent implements OnInit {
  @Output() setdefiID: EventEmitter<string> = new EventEmitter();
  @Input() iddefi: string | undefined;


defis:Defi[]=[];
  constructor(private httpclient :HttpClient) { }

  ngOnInit() {
    this.getdefi();
  }
  getdefi(){
    this.httpclient.get<any>("http://localhost:5000/api/defis/").subscribe(
      response => {
        console.log(response)
        this.defis=response;
        console.log(this.defis[0])
      }
    );
  }
  emite(id:string) {
    console.log(id)
    this.setdefiID.emit(id);
  }

}
