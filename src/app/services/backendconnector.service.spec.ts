import { TestBed } from '@angular/core/testing';

import { BackendconnectorService } from './backendconnector.service';

describe('BackendconnectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackendconnectorService = TestBed.get(BackendconnectorService);
    expect(service).toBeTruthy();
  });
});
