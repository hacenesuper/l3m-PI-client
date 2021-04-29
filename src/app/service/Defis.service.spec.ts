/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefisService } from './Defis.service';

describe('Service: Defis', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefisService]
    });
  });

  it('should ...', inject([DefisService], (service: DefisService) => {
    expect(service).toBeTruthy();
  }));
});
