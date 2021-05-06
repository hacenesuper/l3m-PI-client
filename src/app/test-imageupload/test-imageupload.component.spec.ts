import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImageuploadComponent } from './test-imageupload.component';

describe('TestImageuploadComponent', () => {
  let component: TestImageuploadComponent;
  let fixture: ComponentFixture<TestImageuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestImageuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
