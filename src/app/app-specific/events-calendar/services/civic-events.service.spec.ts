import { TestBed } from '@angular/core/testing';

import { CivicEventsService } from './civic-events.service';

describe('CivicEventsService', () => {
  let service: CivicEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivicEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
