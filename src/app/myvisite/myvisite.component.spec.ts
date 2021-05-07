/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyvisiteComponent } from './myvisite.component';

describe('MyvisiteComponent', () => {
  let component: MyvisiteComponent;
  let fixture: ComponentFixture<MyvisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyvisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyvisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
