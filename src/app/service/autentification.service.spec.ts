/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AutentificationService } from './autentification.service';

describe('Service: Autentification', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentificationService]
    });
  });

  it('should ...', inject([AutentificationService], (service: AutentificationService) => {
    expect(service).toBeTruthy();
  }));
});
