/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MaterielService } from './materiel.service';

describe('Service: Materiel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaterielService]
    });
  });

  it('should ...', inject([MaterielService], (service: MaterielService) => {
    expect(service).toBeTruthy();
  }));
});
