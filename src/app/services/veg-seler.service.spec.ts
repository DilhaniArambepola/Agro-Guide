import { TestBed } from '@angular/core/testing';

import { VegSelerService } from './veg-seler.service';

describe('VegSelerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VegSelerService = TestBed.get(VegSelerService);
    expect(service).toBeTruthy();
  });
});
