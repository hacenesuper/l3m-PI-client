import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantVisitComponent } from './assistant-visit.component';

describe('AssistantVisitComponent', () => {
  let component: AssistantVisitComponent;
  let fixture: ComponentFixture<AssistantVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssistantVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssistantVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
