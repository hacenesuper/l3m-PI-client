/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DefiDetailPlayComponent } from './defi-detail-play.component';

describe('DefiDetailPlayComponent', () => {
  let component: DefiDetailPlayComponent;
  let fixture: ComponentFixture<DefiDetailPlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefiDetailPlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefiDetailPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
