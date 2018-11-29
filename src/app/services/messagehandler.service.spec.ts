import { TestBed } from '@angular/core/testing';

import { MessagehandlerService } from './messagehandler.service';

describe('MessagehandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagehandlerService = TestBed.get(MessagehandlerService);
    expect(service).toBeTruthy();
  });
});
