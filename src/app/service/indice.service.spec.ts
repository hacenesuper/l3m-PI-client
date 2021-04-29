/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IndiceService } from './indice.service';

describe('Service: Indice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndiceService]
    });
  });

  it('should ...', inject([IndiceService], (service: IndiceService) => {
    expect(service).toBeTruthy();
  }));
});
