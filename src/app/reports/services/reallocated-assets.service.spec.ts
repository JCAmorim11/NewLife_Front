import { TestBed } from '@angular/core/testing';

import { ReallocatedAssetsService } from './reallocated-assets.service';

describe('ReallocatedAssetsService', () => {
  let service: ReallocatedAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReallocatedAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
