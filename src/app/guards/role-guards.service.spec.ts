import { TestBed } from '@angular/core/testing';

import { RoleGuardsService } from './role-guards.service';

describe('RoleGuardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RoleGuardsService = TestBed.get(RoleGuardsService);
    expect(service).toBeTruthy();
  });
});
