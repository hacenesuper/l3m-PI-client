/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CreationdefiComponent } from './creationdefi.component';

describe('CreationdefiComponent', () => {
  let component: CreationdefiComponent;
  let fixture: ComponentFixture<CreationdefiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationdefiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationdefiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
