import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() setStep: EventEmitter<number> = new EventEmitter();
  constructor() {

   }
   goToStep(step: number) {
    this.setStep.emit(step);

  }
  ngOnInit() {
  }

}
