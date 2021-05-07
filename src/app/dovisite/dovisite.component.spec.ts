/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DovisiteComponent } from './dovisite.component';

describe('DovisiteComponent', () => {
  let component: DovisiteComponent;
  let fixture: ComponentFixture<DovisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DovisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DovisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
