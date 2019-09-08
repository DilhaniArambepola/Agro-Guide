import { TestBed } from '@angular/core/testing';

import { OrganicSellerService } from './organic-seller.service';

describe('OrganicSellerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganicSellerService = TestBed.get(OrganicSellerService);
    expect(service).toBeTruthy();
  });
});
