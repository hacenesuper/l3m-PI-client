/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefisComponent } from './defis.component';

describe('DefisComponent', () => {
  let component: DefisComponent;
  let fixture: ComponentFixture<DefisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
