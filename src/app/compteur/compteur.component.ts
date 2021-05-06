import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription,timer, interval } from 'rxjs';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent implements OnInit,OnDestroy {
 
  constructor() { }
  num:number=0;
  /*
  countDown!:Subscription;
  counter:string="started";
  tick = 1000;
  ngOnInit() {
    this.countDown = interval(this.tick).subscribe((x) => {console.log(x);if(x==5){
      this.counter="finished";

    }
    console.log(this.counter)
  })

     
  }
  ngOnDestroy(){
    this.countDown.unsubscribe;
  }*/
  ngOnInit() {
  /* timer(0,1000).subscribe(n=>{
     this.num=n;
     console.log("time ",this.num)
   });

    }*/}
    ngOnDestroy(){
     // this.countDown.unsubscribe;
    }

}