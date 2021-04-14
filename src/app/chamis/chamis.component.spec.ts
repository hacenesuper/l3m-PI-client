/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChamisComponent } from './chamis.component';

describe('ChamisComponent', () => {
  let component: ChamisComponent;
  let fixture: ComponentFixture<ChamisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChamisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChamisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
