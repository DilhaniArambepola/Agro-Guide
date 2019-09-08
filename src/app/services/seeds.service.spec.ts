import { TestBed } from '@angular/core/testing';

import { SeedsService } from './seeds.service';

describe('SeedsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeedsService = TestBed.get(SeedsService);
    expect(service).toBeTruthy();
  });
});
