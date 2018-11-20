import { TestBed } from '@angular/core/testing';

import { CalendarListService } from './calendar-list.service';

describe('CalendarListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalendarListService = TestBed.get(CalendarListService);
    expect(service).toBeTruthy();
  });
});
