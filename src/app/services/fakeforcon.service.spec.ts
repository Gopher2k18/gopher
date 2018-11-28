import { TestBed } from '@angular/core/testing';

import { FakeforconService } from './fakeforcon.service';

describe('FakeforconService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeforconService = TestBed.get(FakeforconService);
    expect(service).toBeTruthy();
  });
});
