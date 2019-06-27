import { TestBed } from '@angular/core/testing';

import { FarmaceuticoService } from './farmaceutico.service';

describe('FarmaceuticoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmaceuticoService = TestBed.get(FarmaceuticoService);
    expect(service).toBeTruthy();
  });
});
