/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ArretService } from './arret.service';

describe('Service: Arret', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArretService]
    });
  });

  it('should ...', inject([ArretService], (service: ArretService) => {
    expect(service).toBeTruthy();
  }));
});
